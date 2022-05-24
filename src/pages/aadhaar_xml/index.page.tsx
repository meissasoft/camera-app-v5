import { useRouter } from 'next/router';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { AadhaarXmlSvg } from '@/assets/svg/aadhaar_xml';
import { DivMain, DivSvg, FooterButtonStyle, DivForm, FormLabel, MainStyle } from './index.styles';
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
        </DivForm>
        <MainStyle>
          <form action="#" className="customRadio customCheckbox m-0 p-0">
            <div className="row mb-0">
              <div className="row justify-content-start">
                <div className="col-12">
                  <div className="row">
                    <input type="radio" name="textEditor" id="dreamweaver" checked />
                    <label htmlFor="dreamweaver">Yes</label>
                  </div>
                  <div className="row">
                    <input type="radio" name="textEditor" id="sublime" />
                    <label htmlFor="sublime">No</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </MainStyle>
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
