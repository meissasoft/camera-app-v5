import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  background-color: ${COLORS.LIGHT_RED};
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;
`;

export const PanCameraStyled = styled.div`
  padding: 20px 0px;
`;

export const PanDivCameraBox = styled.video`
  position: relative;
  margin: 200px auto auto auto;
  width: 320px;
  height: 220px;
  border-radius: 8px;
  border: 1.5px solid ${COLORS.SHAMROCK_100};
  display: flex;
  justify-content: center;
  object-fit: cover;
`;

export const DivVideoBox = styled.video`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: end
  flex-direction: column;
  width: 120px;
  height: 140px;
  margin-left: 53%;
  margin-top: -450px;
  border: 1.5px solid ${COLORS.WHITE_200};
  border-radius: 12px;
  object-fit: cover;
`;
export const Canvas = styled.canvas`
  display: none;
`;

export const PanCameraTextStyledWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
