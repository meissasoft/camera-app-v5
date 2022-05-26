// import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setCardBack, setCardFront } from '@/store/app/appSlice';
import { useUserMedia } from '@/hooks/useUserMedia';

import {
  Canvas,
  DivCameraBox,
  DivMain,
  DivVideoBox,
  CameraStyled,
  CameraTextStyled,
  Video,
  CameraTextStyledWrapper,
} from './index.style';

/**
 *
 * @returns Camera page
 */

const LiveCamera = () => {
  // const router = useRouter();
  const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: 'environment' },
  };

  const dispatch = useAppDispatch();
  const { t } = useTranslation('live_photo');
  const [isFront, setIsFront] = useState(true);
  const [cardFront, setcardFront] = useState('');
  const [cardBack, setcardBack] = useState('');
  // const [isDone, setIsDone] = useState<boolean>(false);
  const [instruction, setInstruction] = useState<any>(t('Stay Still for a live photo'));
  const mediaStream = useUserMedia(CAPTURE_OPTIONS, !isFront);

  const videoRef = useRef(null) as any;
  const photoRef = useRef(null) as any;

  function handleCanPlay() {
    videoRef.current.play();
  }

  const takePhoto = () => {
    const width = 314;
    const height = width / (16 / 9);
    const video = videoRef.current;
    const photo = photoRef.current as any;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = photo.toDataURL();
    if (cardFront.length < 5) {
      setcardFront(dataUrl);
      dispatch(setCardFront(dataUrl));
      handleClear();
      setIsFront(false);
    } else if (cardBack.length < 5) {
      setcardBack(dataUrl);
      dispatch(setCardBack(dataUrl));
      // router.push('/aadhaar_card');
    }
  };

  useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = mediaStream;
    }
  }, [mediaStream]);

  useEffect(() => {
    // setIsDone(false);
    setTimeout(() => {
      setInstruction(t('Capturing...Please wait'));
    }, 3000);
    setTimeout(faceDone, 8000);
  });

  const faceDone = () => {
    // setIsDone(true);
    setTimeout(nextInstruction, 2000);
  };

  const nextInstruction = () => {
    // setIsDone(false);
    setInstruction(t('Photo Captured Successfully'));
  };

  function handleClear() {
    const context = photoRef.current.getContext('2d');
    context.clearRect(0, 0, photoRef.current.width, photoRef.current.height);
    videoRef.current.srcObject = null;
  }

  return (
    <DivMain>
      <CameraStyled>
        <DivCameraBox>
          <Video ref={videoRef} onCanPlay={handleCanPlay} onClick={takePhoto}></Video>
          <Canvas ref={photoRef}></Canvas>
        </DivCameraBox>
        <DivVideoBox></DivVideoBox>
      </CameraStyled>

      <CameraTextStyledWrapper>
        <CameraTextStyled>{instruction}</CameraTextStyled>
      </CameraTextStyledWrapper>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['live_photo'])),
  },
});
export default LiveCamera;
