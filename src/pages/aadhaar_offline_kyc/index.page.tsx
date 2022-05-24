import { useRouter } from 'next/router';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import StepLayout from '@/components/StepsLayout';
import { DivMain, FooterButtonStyle, FormLabel } from './index.styles';
/**
 *
 * @returns Language page
 */

const AadhaarOfflineKyc = () => {
  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/');
  };

  const handleGeneration = () => {
    console.log('Generate Clicked');
  };
  const handleProceed = () => {
    router.push('/aadhaar_number');
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
          <Button isBottom onClick={handleGeneration} className="m-auto" backgroundLight>
            Generate Now
          </Button>
        </div>

        <div className="button-container">
          <Button isBottom onClick={handleProceed} className="m-auto">
            Proceed
          </Button>
        </div>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default AadhaarOfflineKyc;
