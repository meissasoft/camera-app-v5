import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// import { DivRadioStyled } from '@/components/CarouselModel/index.style';
import { useState } from 'react';
import Button from '@/components/core/Button';
import DemoCarousel from '@/components/CarouselModel';
import MyCommenceCenteredModal from '@/components/CommenceVideomodel';
import { DivMain, DivSvg, DivForm, ParagraphStyled, TextStyled, DivButton } from './index.style';
/**
 *
 * @returns Walk Through page
 */
const WalkThrough = () => {
  const router = useRouter();
  const { t } = useTranslation('walk_through');

  const [modalShow, setModalShow] = useState<boolean>(false);
  const onAgree = () => {
    router.push('/commence_video');
  };
  const onDisAgree = () => {
    setModalShow(false);
  };

  const handleContinue = () => {
    setModalShow(true);
  };

  return (
    <DivMain>
      <DivSvg>
        <DemoCarousel />
      </DivSvg>
      <DivForm>
        <TextStyled>{t('ckyc')}</TextStyled>
        <ParagraphStyled>{t('please_keep_your_following_documents_handy_before_you_proceed.')}</ParagraphStyled>
      </DivForm>

      <DivButton>
        <Button isBottom onClick={handleContinue} className="m-auto">
          {t('continue')}
        </Button>
      </DivButton>
      <MyCommenceCenteredModal show={modalShow} onAgree={onAgree} onDisagree={onDisAgree} onHide={onDisAgree} />
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['walk_through', 'aadhaar_xml'])),
  },
});

export default WalkThrough;
