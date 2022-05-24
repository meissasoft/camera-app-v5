import { useRouter } from 'next/router';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { AadhaarXmlSvg } from '@/assets/svg/aadhaar_xml';
import StepLayout from '@/components/StepsLayout';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { DivMain, DivSvg, FooterButtonStyle, FormLabel } from './index.styles';
/**
 *
 * @returns Language page
 */
const AadhaarOfflineKyc = () => {
  // const { verificationStep } = useAppSelector(getAppDataSelector);

  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/');
  };

  const handleContinue = () => {
    router.push(`/`);
  };

  const onClickCard = () => {
    console.log('Card Clicked');
  };

  return (
    <DivMain>
      <div>
        <Header text="Aadhaar Offline KYC" onClick={onClickHeaderIcon} />
        <div className="mt-5">
          <StepLayout
            rightIcon={'arrow'}
            heading={'Upload from device'}
            content={'Zip file should not be more that 3 days old'}
            onClick={onClickCard}
          />
        </div>
      </div>
      <FooterButtonStyle>
        <FormLabel>Don’t have an Aadhaar XML file?</FormLabel>

        <div className="button-container">
          <Button isBottom onClick={handleContinue} className="m-auto" bgLight>
            Generate Now
          </Button>
        </div>

        <div className="button-container">
          <Button isBottom onClick={handleContinue} className="m-auto">
            Proceed
          </Button>
        </div>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default AadhaarOfflineKyc;
