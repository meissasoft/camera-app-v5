import styled from '@emotion/styled';

export const MainDivStyled = styled.div`
  .carousel-indicators button {
    width: 0.4rem !important;
    height: 0.4rem !important;
    border-radius: 50%;
    background-color: #38568f;
    color: #38568f;
    margin-top: 30px;
    padding: 5px;
  }

  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    display: none;
  }

  .carousel-control-next,
  .carousel-control-prev {
    border: none;
  }
  .carousel-indicators {
    position: absolute;
    bottom: -70px;
  }
  .carousel-indicators button:not(:first-child) {
    margin-left: 0.5rem;
  }
`;
