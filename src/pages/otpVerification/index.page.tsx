import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { PasswordIcon } from '@/assets/svg/password';
import Button from '@/components/core/Button';
import OTPInput from '@/components/core/Otp';

import {
  BarIconDiv,
  CodeText,
  CrossIconDiv,
  DivMain,
  DivMainContainer,
  OtpContainer,
  ResendText,
  VerificationCodeDescription,
  VerificationCodeDiv,
  VerificationCodeTitle,
} from './index.styles';

const VerifyOtp = () => {
  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/aadhaar_number');
  };

  const handleContinue = () => {
    router.push('/download_successfully');
  };

  return (
    <DivMain>
      <DivMainContainer>
        <div>
          <BarIconDiv>
            <BarIcon />
          </BarIconDiv>
          <CrossIconDiv onClick={handleBack}>
            <CrossIcon />
          </CrossIconDiv>
          <VerificationCodeDiv>
            <PasswordIcon />
            <VerificationCodeTitle>{t('verification_code')}</VerificationCodeTitle>
            <VerificationCodeDescription>
              {t('please_enter_the_verification_code_we_sent_to_your_phone_number')}
            </VerificationCodeDescription>
          </VerificationCodeDiv>
          <OtpContainer>
            <OTPInput
              autoFocus
              isNumberInput
              length={6}
              inputClassName="otpInput"
              onChangeOTP={(e) => {
                console.log(e);
              }}
            />
          </OtpContainer>

          <div className="d-flex w-100 justify-content-center align-items-center mt-4 mb-4 ">
            <CodeText className="mx-2">{t("i_did'nt_receive_a_code")}</CodeText>
            <button className="btn btn-primary">
              <ResendText>{t('resend')}</ResendText>
            </button>
          </div>

          <div className="border text-dark w-100 mb-4"></div>

          <div className="text-center">
            <VerificationCodeTitle>Enter Share Code</VerificationCodeTitle>
            <VerificationCodeDescription>
              Create a 6 digit code to secure your offline eKYC{' '}
            </VerificationCodeDescription>
          </div>
          <OtpContainer>
            <OTPInput
              isNumberInput
              length={4}
              inputClassName="otpInput"
              onChangeOTP={(e) => {
                console.log(e);
              }}
            />
          </OtpContainer>
        </div>

        <Button isBottom onClick={handleContinue} className="my-5 m-auto">
          Proceed
        </Button>
      </DivMainContainer>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default VerifyOtp;
