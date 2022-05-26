import router from 'next/router';

import { useEffect, useRef, useState } from 'react';

import { DivCameraBox, DivFrontCam, DivMain, TextStyled, DivFrontCamContainer } from './index.style';

/**
 *
 * @returns initiated_video_call page
 */

const InitiatedVideoCall = () => {
  const videoRef = useRef(null);
  const mediaRecorder: any = useRef(null);
  const blobsRecorded: any = [];
  const [text, setText] = useState<string>('What is the date today ( in DD-MM-YYYY format ) ?');

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        const video = videoRef.current as any;
        video.srcObject = stream;
        video.play();
        mediaRecorder.current = new MediaRecorder(stream, { mimeType: 'video/webm' });
        mediaRecorder?.current?.start(1000);
        mediaRecorder.current.addEventListener('dataavailable', function (e: any) {
          blobsRecorded.push(e.data);
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  useEffect(() => {
    setTimeout(() => {
      setText('Kindly try changing your network, your connection is weak.!');
    }, 2000);
    setTimeout(() => {
      setText('Kindly stay stable for the call to continue');
    }, 3000);
    setTimeout(() => {
      setText('Kindly follow the instructions shown here');
    }, 4000);
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <DivMain>
      <DivFrontCamContainer>
        <DivFrontCam />
      </DivFrontCamContainer>
      <DivCameraBox ref={videoRef} />
      <TextStyled>{text}</TextStyled>
    </DivMain>
  );
};

export default InitiatedVideoCall;
