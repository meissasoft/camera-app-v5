import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
export const DivSvg = styled.div`
  margin-top: 100px;
  width: 240px;
  height: 260px;
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
  justify-content: end;
  top: 60px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #38568f;
  display: flex;
  margin-left: 200px;
  flex-direction: column;
  width: 40px;
  object-fit: cover;
  border: 1.5px solid ${COLORS.BLACK_100};
  border-radius: 12px;
`;

export const FooterButtonStyle = styled.div`
  width: 100%;
`;
