import styled from '@emotion/styled';

export const MainDivStyled = styled.div`
  // position: relative;

  .carousel.carousel-slider .control-arrow {
    margin-right: 10px;
  }
  .carousel.carousel-slider {
    margin: 0;
    // border: 1px solid yellow;
    width: 240px;
    height: 360px;
    z-index: 1;
    // position: relative;
    overflow: hidden;
  }

  .carousel .control-dots {
    position: absolute;
    bottom: 0;
    padding-bottom: 20px;
  }

  .carousel .control-dots .dot {
    z-index: 2;
    cursor: pointer;
  }
`;
