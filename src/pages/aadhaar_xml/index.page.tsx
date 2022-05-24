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
  CustomRadioButton,
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
    router.push(`/aadhaar_offline_kyc`);
  };

  return (
    <DivMain>
      <div>
        <Header text="Aadhaar XML" onClick={onClickHeaderIcon} />
        <DivSvg>
          <AadhaarXmlSvg />
        </DivSvg>
        <DivForm>
          <FormLabel>Do you have an Aadhaar XML file?</FormLabel>
          <RadioButtonView>
            <CustomRadioButton>
              <RadioInputStyled
                name={'yes'}
                className="radioInput"
                selected={false}
                onChange={() => console.log('ds')}
              />
              <span className="innerBall">12</span>
            </CustomRadioButton>
            <RadioButtonLabel className="form-check-label">Yes</RadioButtonLabel>
          </RadioButtonView>
          <RadioButtonView>
            <CustomRadioButton>
              <RadioInputStyled
                name={'yes'}
                className="radioInput"
                selected={false}
                onChange={() => console.log('ds')}
              />
              <span className="innerBall"></span>
            </CustomRadioButton>
            <RadioButtonLabel className="form-check-label">No</RadioButtonLabel>
          </RadioButtonView>
        </DivForm>
      </div>
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
