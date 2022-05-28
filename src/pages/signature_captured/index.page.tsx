import router from 'next/router';

import { useEffect, useRef } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useUserMedia } from '@/hooks/useUserMedia';

import { DoneIcon } from '@/assets/svg/done-icon';
import { DivCameraBox, DivFrontCam, DivMain, DivFrontCamContainer, DivTextStyled, TextStyled } from './index.styles';

/**
 *
 * @returns Signature captured successfully page
 */

const SignatureCaptured = () => {
  const front = {
    audio: true,
    video: { facingMode: 'environment' }, // change to user for front camera
  };
  const { t } = useTranslation('signature_captured');
  const videoRefFront: any = useRef(null);
  const videoRefBack: any = useRef(null);
  const mediaStreamFront = useUserMedia(front, false);
  const mediaRecorderFront: any = useRef(null);
  const mediaRecorderBack: any = useRef(null);
  const blobsRecordedFront: any = [];
  const blobsRecordedBack: any = [];

  useEffect(() => {
    if (mediaStreamFront && videoRefFront.current && !videoRefFront.current.srcObject) {
      videoRefFront.current.srcObject = mediaStreamFront;
      videoRefFront?.current?.play();
      mediaRecorderFront.current = new MediaRecorder(mediaStreamFront, { mimeType: 'video/webm' });
      mediaRecorderFront.current.start(1000);
      mediaRecorderFront.current.addEventListener('dataavailable', function (e: any) {
        blobsRecordedFront.push(e.data);
      });
    }
    if (mediaStreamFront && videoRefBack.current && !videoRefBack.current.srcObject) {
      videoRefBack.current.srcObject = mediaStreamFront;
      videoRefBack.current.play();
      mediaRecorderBack.current = new MediaRecorder(mediaStreamFront, { mimeType: 'video/webm' });
      mediaRecorderBack.current?.start(1000);
      mediaRecorderBack.current.addEventListener('dataavailable', function (e: any) {
        blobsRecordedBack.push(e.data);
      });
    }
  }, [mediaStreamFront]);

  useEffect(() => {
    setTimeout(() => {
      router.push('/status_updated_successfully');
    }, 6000);
  }, []);

  return (
    <DivMain>
      <DivFrontCamContainer>
        <DivFrontCam ref={videoRefFront} />
      </DivFrontCamContainer>
      <DivCameraBox ref={videoRefBack} />
      <DivTextStyled>
        <TextStyled>
          {t('signature_captured_successfully')}
          <DoneIcon />
        </TextStyled>
      </DivTextStyled>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['signature_captured'])),
  },
});

export default SignatureCaptured;
