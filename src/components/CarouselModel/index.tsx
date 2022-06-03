import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { DivMainSlider1, DivMainSlider2, DivMainSlider3, MainDivStyled } from './index.style';

function DemoCarousel2() {
  return (
    <>
      <MainDivStyled>
        <Carousel
          interval={1000}
          centerMode
          infiniteLoop
          autoPlay={true}
          autoFocus={true}
          showStatus={false}
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          useKeyboardArrows={true}
        >
          <DivMainSlider1 />
          <DivMainSlider2 />
          <DivMainSlider3 />
        </Carousel>
      </MainDivStyled>
    </>
  );
}
export default DemoCarousel2;
