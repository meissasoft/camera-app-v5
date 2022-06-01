import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
export const DivSvg = styled.div`
  margin-top: 100px;
  width: 240px;
  background-color: #eaf2f9;
  border-radius: 12px;
`;
export const DivSvg1 = styled.div`
  text-align: center;
  margin-top: 100px;
  width: 20px;
  background-color: #eaf2f9;
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
  position: absolute;
  width: 32px;
  height: 19px;
  display: flex;
  margin-left: 80%;
  justify-content: end;
  top: 72px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #38568f;
`;

export const FooterButtonStyle = styled.div`
  width: 100%;
`;
