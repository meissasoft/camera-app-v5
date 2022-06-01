import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import CarouseModel from '@/components/CarouselModel';
// import { DivRadioStyled } from '@/components/CarouselModel/index.style';
import Button from '@/components/core/Button';
import { DivMain, DivSvg, DivForm, ParagraphStyled, TextStyled, FooterButtonStyle } from './index.style';
/**
 *
 * @returns Initiating a video call page
 */
const InitiatingVideo = () => {
  const router = useRouter();
  const { t } = useTranslation('initiating_video');
  //   useEffect(() => {
  //     setTimeout(() => {
  //       router.push('/initiated_video_call');
  //     }, 3000);
  //   }, []);

  const handleContinue = () => {
    router.push('commence_video');
  };

  return (
    <DivMain>
      <DivSvg>
        {/* <DivButton onClick={onClickBack}>Skip</DivButton> */}
        <CarouseModel />
      </DivSvg>

      {/* <DivRadioDots>
        <DivRadioStyled></DivRadioStyled>
      </DivRadioDots> */}

      <DivForm>
        <TextStyled>{t('CKYC')}</TextStyled>
        <ParagraphStyled>{t('Please keep your following documents handy before you proceed.')}</ParagraphStyled>
      </DivForm>

      <FooterButtonStyle>
        <Button onClick={handleContinue} className="m-auto">
          Next
        </Button>
      </FooterButtonStyle>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['initiating_video'])),
  },
});

export default InitiatingVideo;
