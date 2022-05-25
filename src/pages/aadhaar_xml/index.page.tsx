import { useState } from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';

import { AadhaarXmlSvg } from '@/assets/svg/aadhaar_xml';
// import RadioInputStyled from '@/components/core/RadioInput';
import MyCommenceCenteredModal from '@/components/core/CommenceVideomodel/index.page';
import { DivMain, DivSvg, FooterButtonStyle, DivForm, FormLabel, MainStyle } from './index.styles';
/**
 *
 * @returns Language page
 */
const AadhaarXml = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);

  const onClickHeaderIcon = () => {
    router.push('/');
  };
  const [ischecked, setIsChecked] = useState(false);

  const handleContinue = () => {
    setModalShow(true);
  };
  const onClicOk = () => {
    router.push('/aadhaar_offline_kyc');
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
        <MainStyle isChecked={ischecked}>
          <form action="#" className="customRadio customCheckbox m-0 p-0">
            <div className="row mb-0">
              <div className="row justify-content-start">
                <div className="col-12">
                  <div className="row">
                    <input
                      type="radio"
                      name="textEditor"
                      id="dreamweaver"
                      checked
                      onClick={() => (!ischecked ? setIsChecked(true) : setIsChecked(false))}
                      className={ischecked ? 'checkclass' : 'notcheck'}
                    />
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
          <div></div>
          <form>
            <fieldset>
              <div>
                <input type="radio" id="contactChoice1" name="contact" value="email" checked />
                <label htmlFor="contactChoice1">Email</label>

                <input type="radio" id="contactChoice2" name="contact" value="phone" />
                <label htmlFor="contactChoice2">Phone</label>

                <input type="radio" id="contactChoice3" name="contact" value="mail" />
                <label htmlFor="contactChoice3">Mail</label>
              </div>
            </fieldset>
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
      <MyCommenceCenteredModal
        show={modalShow}
        onOk={onClicOk}
        onHide={() => setModalShow(false)}
        GreaterThenIcon={GreaterThenIcon}
        heading={t('By clicking on ‘Agree’, you hereby:')}
        paragraph1={t(
          'Acknowledge the request made by Syntizen technologies private limited to provide personal details.'
        )}
        paragraph2={t(
          'Provide my unconditional concent to access, copy and store all information there in by sharing the inofrmation.'
        )}
        paragraph3={t(
          'Also undertake I/We are authorised to do so on behalf of the requestee organisation and tkae sole and complete responsibilitity for the same.'
        )}
        Disagree={t('Disagree')}
        Agree={t('Agree')}
      />
    </DivMain>
  );
};

export default AadhaarXml;
