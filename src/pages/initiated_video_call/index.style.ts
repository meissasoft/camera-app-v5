import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  padding: 20px;
  background: #323131;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
export const TextStyled = styled.p`
  color: ${COLORS.WHITE_100};
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

export const DivCameraBox = styled.video`
  width: 100%;
  object-fit: cover;
`;

export const DivFrontCamContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  position: absolute;
  right: 20px;
`;

export const DivFrontCam = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center
  flex-direction: column;
  width: 120px;
  height: 140px;
  border: 1.5px solid #ffffff;
  border-radius: 12px;
`;
