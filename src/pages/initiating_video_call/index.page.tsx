import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';

import Header from '@/components/core/Header';
import Button from '@/components/core/Button';

import { CardIcon } from '@/assets/svg/card-icon2';
import { GoogleIcon } from '@/assets/svg/google-1';

import {
  DivButton,
  DivButtons,
  DivMain,
  DivVerificationCardStyled,
  DivVerificationGoogleStyled,
  DocumentContainer,
  IdentificationSelectStyled,
  IdentificationSmallTextStyled,
  IdentificationSmallTextStyled2,
  IdentificationStyled,
  IdentificationStyled2,
  IdentificationTextStyled,
  IdentificationTextStyled2,
  Row,
  SpanParagraph,
  SpanTagButton,
  StyledLine,
} from './index.style';

/**
 *
 * @returns initiating video call page
 */

const onClickHeaderIcon = () => {
  router.push('/language');
};

const InitiatingVideo = () => {
  const { t } = useTranslation('commence_your_video');

  const handleStart = () => {
    router.push('/aadhaar_xml');
  };

  const names = [
    {
      name: t('English'),
    },
    {
      name: t('Telugu'),
    },
    {
      name: t('Hindi'),
    },
    { name: t('Tamil') },
    { name: t('kannada') },
    { name: t('Malayalam') },
    { name: t('kannada') },
  ];

  return (
    <DivMain>
      <div>
        <Header onClick={onClickHeaderIcon} text={t('Keep things handy')} />
        <IdentificationStyled>
          <DivVerificationCardStyled>
            <CardIcon />
          </DivVerificationCardStyled>
          <IdentificationStyled2>
            <IdentificationTextStyled>
              please keep handy your <strong>PAN Card,</strong>
            </IdentificationTextStyled>
          </IdentificationStyled2>

          <SpanParagraph>
            <IdentificationTextStyled2>{t('Blank Paper')}</IdentificationTextStyled2>
            <IdentificationSmallTextStyled2>{t('and')}</IdentificationSmallTextStyled2>
            <IdentificationTextStyled2>{t('Pen.')}</IdentificationTextStyled2>
          </SpanParagraph>
        </IdentificationStyled>
        <DocumentContainer>
          <StyledLine />
          <DivVerificationGoogleStyled>
            <GoogleIcon />
          </DivVerificationGoogleStyled>

          <IdentificationStyled>
            <IdentificationSelectStyled>{t('Select language')}</IdentificationSelectStyled>
            <IdentificationSmallTextStyled>
              {t('We recommend you select a below listed Language to continue with your video call.')}
            </IdentificationSmallTextStyled>
          </IdentificationStyled>
          <DivButtons>
            {names.map((doc, id) => (
              <Row key={id}>
                <div className="col-3">
                  <button className="btn btn-primary">
                    <SpanTagButton>{doc.name}</SpanTagButton>
                  </button>
                </div>
              </Row>
            ))}
          </DivButtons>
        </DocumentContainer>
      </div>
      <DivButton>
        <Button isBottom onClick={handleStart} className="m-auto">
          I'm Ready
        </Button>
      </DivButton>
    </DivMain>
  );
};

// export const getStaticProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['commence_your_video'])),
//   },
// });

export default InitiatingVideo;
