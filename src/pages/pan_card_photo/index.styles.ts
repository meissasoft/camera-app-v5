import styled from '@emotion/styled';

export const DivMain = styled.div`
  background-color: #42362a;
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
  border: 1.5px solid #34ec68;
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
  border: 1.5px solid #FFFFFF;
  border-radius: 12px;
  object-fit: cover;
`;
export const Canvas = styled.canvas`
  display: none;
`;

export const PanCameraTextStyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
