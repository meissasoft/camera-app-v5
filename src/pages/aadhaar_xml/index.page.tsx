import { useRouter } from 'next/router';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { AadhaarXmlSvg } from '@/assets/svg/aadhaar_xml';
import RadioInputStyled from '@/components/core/RadioInput';
import {
  DivMain,
  DivSvg,
  FooterButtonStyle,
  DivForm,
  FormLabel,
  RadioButtonLabel,
  RadioButtonView,
} from './index.styles';
/**
 *
 * @returns Language page
 */
const AadhaarXml = () => {
  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/');
  };

  const handleContinue = () => {
    router.push(`/aadhaar_xml`);
  };
  return (
    <DivMain>
      <Header text="Aadhaar XML" onClick={onClickHeaderIcon} />
      <DivSvg>
        <AadhaarXmlSvg />
      </DivSvg>
      <DivForm>
        <FormLabel>Do you have an Aadhaar XML file?</FormLabel>
        <RadioButtonView>
          <RadioInputStyled name={'yes'} className="radioInput" />

          <RadioButtonLabel className="form-check-label">Yes</RadioButtonLabel>
        </RadioButtonView>
        <RadioButtonView>
          <RadioInputStyled name={'yes'} className="radioInput" />

          <RadioButtonLabel className="form-check-label">No</RadioButtonLabel>
        </RadioButtonView>
      </DivForm>
      <FooterButtonStyle>
        <div className="button-container">
          <Button isBottom onClick={handleContinue} className="m-auto">
            Continue
          </Button>
        </div>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default AadhaarXml;
