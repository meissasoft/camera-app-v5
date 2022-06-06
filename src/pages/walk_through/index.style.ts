import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 20px);
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
`;
export const DivSvg = styled.div`
  margin-top: 60px;
  width: 100%;
  background-color: white;
  border-radius: 12px;
`;

export const DivForm = styled.div`
  text-align: center;
`;
export const DivRadioDots = styled.div`
  text-align: center;
`;
export const TextStyled = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.BLACK_HEAVY};
`;
export const ParagraphStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const DivButton = styled.div`
  margin-top: 20px;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;
export const DivSkip = styled.div`
  display: flex;
  margin-top: -15px;
  justify-content: flex-end;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${COLORS.SKIP_100};
`;
