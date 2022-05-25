import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import OTPInput from '@/components/core/Otp';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep } from '@/store/app';

import { CheckMarkSvg } from '@/assets/svg/check_mark';
import { DivMain } from './index.style';

const DownloadSuccessfully = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/login');
  };

  const handleContinue = () => {
    router.push('/verification');
    dispatch(setVerificationStep(1));
  };

  return (
    <DivMain>
      <div>
        <div className="heading">
          <Heading text={t('Download Successfully')} onClick={handleBack} />
        </div>

        <div className="mt-5 text-center">
          <CheckMarkSvg />
          <div className="title">{t('File Download Successfully')}</div>
          <p className="description">{t('Kindly re-confirm your share code to grant access to your XML file.')}</p>
        </div>
        <OTPInput
          autoFocus
          isNumberInput
          length={4}
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={(e) => {
            console.log(e);
          }}
        />
      </div>

      <Button isBottom onClick={handleContinue} className="my-5 m-auto">
        Proceed
      </Button>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default DownloadSuccessfully;
