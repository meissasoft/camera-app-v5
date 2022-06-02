import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { MainDivStyled } from './index.style';

function DemoCarousel2() {
  return (
    <>
      <MainDivStyled>
        <Carousel
          interval={1000}
          infiniteLoop
          autoPlay={true}
          autoFocus={true}
          showStatus={false}
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          useKeyboardArrows={true}
        >
          <div>
            <img
              src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              style={{ width: '200px', height: '260px' }}
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ width: '200px', height: '260px' }}
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ width: '200px', height: '260px' }}
            />
          </div>
        </Carousel>
      </MainDivStyled>
    </>
  );
}
export default DemoCarousel2;
// function DemoCarousel3() {
//   return (
//     <Carousel showArrows={true}>
//       <div style={{ width: '300px' }}>
//         <img src="assets/1.jpeg" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div>
//         <img src="assets/2.jpeg" />
//         <p className="legend">Legend 2</p>
//       </div>
//       <div>
//         <img src="assets/3.jpeg" />
//         <p className="legend">Legend 3</p>
//       </div>
//     </Carousel>
//   );
// }
// export default DemoCarousel3;
