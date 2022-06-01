import { Carousel } from 'react-bootstrap';
import { MainDivStyled } from './index.style';
function CarouseModel() {
  return (
    <>
      <MainDivStyled>
        <Carousel style={{ width: '100%', height: '260px' }}>
          <Carousel.Item interval={1000}>
            <h1>Ubaid bhai</h1>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            {/* <img className="d-block w-100" src={Screenshot} alt="img not found" /> */}
            <h1>Amir</h1>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img className="d-block w-100" /> */}
            <h1>Jahanzaib</h1>
          </Carousel.Item>
        </Carousel>
      </MainDivStyled>
    </>
  );
}
export default CarouseModel;
