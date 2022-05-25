import { useState } from 'react';
import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Calendar from 'react-calendar';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';

import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep } from '@/store/app';

import 'react-calendar/dist/Calendar.css';
import { ArrowBotom } from '@/assets/svg/arrow_bottom';
import { ArrowTop } from '@/assets/svg/arrow_top';
// import { TickMark } from '@/assets/svg/tick_mark';
import { DivMain, CustomDropDown } from './index.style';
const Reshedule = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/login');
  };

  const handleContinue = () => {
    router.push('/verification');
    dispatch(setVerificationStep(1));
  };

  const [value, onChange] = useState(new Date());

  return (
    <DivMain>
      <div>
        <div className="heading">
          <Heading text={t('Reschedule')} onClick={handleBack} />
        </div>

        <div className="mt-5 text-center">
          <p className="description">
            {t('Please select a')} <span className="font-weight-bold">{t(' date & time ')}</span>
            {t('to reschedule a video call session with our agent')}
          </p>
        </div>
        <div className="calendaMain my-3">
          <Calendar onChange={onChange} value={value} />
        </div>

        <CustomDropDown>
          <div
            className="defaultOption"
            onClick={() => (dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true))}
          >
            <span>Select a avaliable time Slot</span>
            <span>{!dropDownOpen ? <ArrowBotom /> : <ArrowTop />}</span>
          </div>
          {dropDownOpen && (
            <div className="optionsListConatiner">
              <div className="option">
                <span>Option 1</span>
                {/* <TickMark /> */}
              </div>
              <div className="option">
                <span>Option 2</span>
                {/* <TickMark /> */}
              </div>
              <div className="option">
                <span>Option 3</span>
                {/* <TickMark /> */}
              </div>
            </div>
          )}
        </CustomDropDown>
      </div>

      <Button isBottom onClick={handleContinue} className="my-5 m-auto">
        Confirm
      </Button>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default Reshedule;
