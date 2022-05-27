import { useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { DoneIcon } from '@/assets/svg/done-icon';
import { CameraTextStyled, DivCameraTextStyled } from './index.style';

/**
 *
 * @returns PanCardPhoto
 */

interface Props {
  takePhoto?: any;
}

const PanCardPhotos = ({ takePhoto }: Props) => {
  const { t } = useTranslation('Pan_Card_Photo');
  const [text, setText] = useState<any>(t('Position the PAN card exactly in the frame'));
  const [icon, setIcon] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setText(t('PAN card captured successfully'));
      setIcon(true);
    }, 3000);

    setTimeout(() => {
      setText(t('Hold your signature'));
      takePhoto();
      setIcon(false);
    }, 5000);
  }, []);

  return (
    <DivCameraTextStyled>
      <CameraTextStyled>{text}</CameraTextStyled>
      {icon && <DoneIcon />}
    </DivCameraTextStyled>
  );
};
export default PanCardPhotos;
