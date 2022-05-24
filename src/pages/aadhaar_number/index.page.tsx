import router from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep } from '@/store/app';

import FieldInput from '@/components/core/FieldInput';
import { VectorIcon } from '@/assets/svg/reload';
import { DivMain, CapchaView } from './index.styles';

const AadhaarNumber = () => {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    router.push('/login');
  };

  const handleSendOtp = () => {
    router.push('/optVerification');
    dispatch(setVerificationStep(1));
  };

  return (
    <DivMain>
      <div className="heading">
        <Heading text={'Aadhaar Number'} onClick={handleBack} />
      </div>
      <div className="inner">
        <div className="barIcon">
          <BarIcon />
        </div>
        <div className="crossIcon" onClick={handleBack}>
          <CrossIcon />
        </div>
        <div className="text-center">
          <div className="title">Aadhaar number</div>
          <p className="description">Enter your 12 digit Aadhaar number to begin</p>
        </div>

        <FieldInput
          placeholder={'Aadhaar Number*'}
          name={'mobile'}
          className="my-2 m-auto rounded border p-2 loginInput"
        />
        <FieldInput
          placeholder={'Enter Security Code*'}
          name={'mobile'}
          className="my-2 m-auto rounded border p-2 loginInput"
        />
        <div className="d-flex w-100 justify-content-start align-items-center mt-2">
          <span className="code-text">Type the character you see in the picture</span>
        </div>

        <CapchaView>
          <div className="capcha">
            <span>HnsoeG</span>
          </div>
          <VectorIcon />
        </CapchaView>
        <Button isBottom onClick={handleSendOtp} className="my-5 m-auto">
          Send OTP
        </Button>
      </div>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default AadhaarNumber;
