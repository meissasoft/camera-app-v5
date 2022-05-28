import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  padding: 20px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn {
    padding: 5px 8px 5px 6px;
    width: 85px;
    height: 36px;
    border-radius: 5px;
    margin: 0px;
  }
`;
export const IdentificationStyled = styled.div`
  margin: 20px 0px;
  text-align: center;
`;

export const IdentificationStyled2 = styled.div`
  text-align: center;
  gap: 5px;
`;

export const IdentificationTextStyled = styled.div`
  margin-top: 5px;
  display: inline;
  flex-direction: row;
`;

export const LightText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin-bottom: 0px !important;
  color: #121212;
  opacity: 0.6;
`;

export const BoldText = styled.span`
  font-weight: 600;
  margin-top: 5px;
  font-style: normal;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0px !important;
  color: black !important;
  opacity: 10 !important;
`;

export const IdentificationSelectStyled = styled.p`
  margin-top: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;
  color: black;
`;

export const IdentificationTextStyled2 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0px !important;
`;

export const IdentificationTextParentDiv = styled.p`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 215px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IdentificationSmallTextStyled = styled.p`
  margin-top: 5px !important ;
`;

export const IdentificationSmallTextStyled2 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;
export const StyledLine = styled.hr`
  opacity: 0.6;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const IdentifyText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DocumentContainer = styled.div`
  margin-top: 20px;
`;
export const DivDifference = styled.div`
  margin-top: 45px;
`;
export const DivButton = styled.div``;
export const DivVerificationCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const DivVerificationGoogleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
`;

export const StyledSpan = styled.span`
  background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 18px;
`;

export const DivButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 90px);
  row-gap: 10px;
  column-gap: 20px;
  border: none;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 90px);
    column-gap: 15px;
    row-gap: 5px;
  }
`;

export const SpanParagraph = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  margin-top: -10px;
`;
