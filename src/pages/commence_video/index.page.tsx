import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import Header from '@/components/core/Header';
import Button from '@/components/core/Button';

import { CardIcon } from '@/assets/svg/card-icon';

import {
  DivButton,
  DivDifference,
  DivMain,
  DivVerificationCardStyled,
  DocumentContainer,
  IdentificationSmallTextStyled,
  IdentificationStyled,
  IdentificationTextStyled,
  IdentifyText,
  Row,
  StyledLine,
} from './index.style';

/**
 *
 * @returns Verification document page
 */

const onClickHeaderIcon = () => {
  router.push('/language');
};

const Commenceyourvideo = () => {
  const { t } = useTranslation('commence_your_video');
  const document = [
    {
      name: t('Aadhaar Verification'),
      Svg: GreaterThenIcon,
    },
    {
      name: t('PAN Capture'),
      Svg: GreaterThenIcon,
    },
    {
      name: t('Live Photo'),
      Svg: GreaterThenIcon,
    },
    { name: t('Video Call (Liveness check)'), Svg: GreaterThenIcon },
  ];

  const handleStart = () => {
    router.push('/aadhaar_xml');
  };
  const onRowClickHandel = () => {
    router.push('/aadhaar_xml');
  };

  return (
    <DivMain>
      <div>
        <Header onClick={onClickHeaderIcon} text={t('Commence your video KYC')} />
        <IdentificationStyled>
          <DivVerificationCardStyled>
            <CardIcon />
          </DivVerificationCardStyled>
          <IdentificationTextStyled>{t('Verify your identity')}</IdentificationTextStyled>
          <IdentificationSmallTextStyled>
            {t('Please keep your following documents handy before you proceed with your full KYC process.')}
          </IdentificationSmallTextStyled>
        </IdentificationStyled>
        <DocumentContainer>
          <StyledLine />
          {document.map((doc, id) => (
            <Row key={id} onClick={onRowClickHandel}>
              <div className="col-1">{doc.Svg()}</div>
              <DivDifference />
              <div className="col-11">
                <IdentifyText>{doc.name}</IdentifyText>
              </div>
            </Row>
          ))}
        </DocumentContainer>
      </div>
      <DivButton>
        <Button isBottom onClick={handleStart} className="m-auto">
          Start
        </Button>
      </DivButton>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['commence_your_video'])),
  },
});

export default Commenceyourvideo;
