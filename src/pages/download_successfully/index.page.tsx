import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import OTPInput from '@/components/core/Otp';

import { CheckMarkSvg } from '@/assets/svg/check_mark';
import {
  ButtonWrapper,
  DivContent,
  DivContentBody,
  DivContentDescription,
  DivContentTitle,
  DivMain,
  OtpContainerWrapper,
} from './index.style';

const DownloadSuccessfully = () => {
  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/otpVerification');
  };

  const handleContinue = () => {
    router.push('/keeps_things_handy');
  };

  return (
    <DivMain>
      <Heading text={t('Download Successfully')} onClick={handleBack} />
      <DivContentBody>
        <DivContent>
          <CheckMarkSvg />
          <DivContentTitle>{t('File Download Successfully')}</DivContentTitle>
          <DivContentDescription>
            {t('Kindly re-confirm your share code to grant access to your XML file.')}
          </DivContentDescription>
        </DivContent>
        <OtpContainerWrapper>
          <OTPInput
            autoFocus
            isNumberInput
            length={4}
            inputClassName="otpInput"
            onChangeOTP={(e) => {
              console.log(e);
            }}
          />
        </OtpContainerWrapper>
      </DivContentBody>
      <ButtonWrapper>
        <Button onClick={handleContinue} className="m-auto">
          Proceed
        </Button>
      </ButtonWrapper>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default DownloadSuccessfully;
