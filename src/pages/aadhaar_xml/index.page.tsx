import { useState } from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { AadhaarXmlSvg } from '@/assets/svg/aadhaar_xml';
import RadioInputStyled from '@/components/core/RadioInput';
import MyCommenceCenteredModal from '@/components/core/CommenceVideomodel/index.page';
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
  const { t } = useTranslation();
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);

  const onClickHeaderIcon = () => {
    router.push('/');
  };

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
      <MyCommenceCenteredModal
        show={modalShow}
        onOk={onClicOk}
        onHide={() => setModalShow(false)}
        userConsent={t('User Consent')}
        clickingAgree={t('By clicking on ‘Agree’, you hereby:')}
        listParaOne={t(
          'Acknowledge the request made by Syntizen technologies private limited to provide personal details.'
        )}
        listParaTwo={t(
          'Provide my unconditional concent to access, copy and store all information there in by sharing the inofrmation.'
        )}
        listParaThree={t(
          'Also undertake I/We are authorised to do so on behalf of the requestee organisation and tkae sole and complete responsibilitity for the same.'
        )}
        disagree={t('Disagree')}
        agree={t('Agree')}
      />
    </DivMain>
  );
};

export default AadhaarXml;
