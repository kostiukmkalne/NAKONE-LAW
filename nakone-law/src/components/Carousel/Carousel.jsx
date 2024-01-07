import "./Carousel.css";
// import Carousel from 'react-bootstrat/Carousel';
import olga from '../../assets/image.svg';

const Carousel = () => {
    return (
    <Carousel>
    <Carousel.Item>
      <img src={olga} alt="olga" className="carousel" />
    </Carousel.Item>

    <Carousel.Item>
      <img src={olga} alt="olga" className="carousel" />
    </Carousel.Item>

    <Carousel.Item>
      <img src={olga} alt="olga" className="carousel" />
    </Carousel.Item>

    <Carousel.Item>
      <img src={olga} alt="olga" className="carousel" />
    </Carousel.Item>

    <Carousel.Item>
      <img src={olga} alt="olga" className="carousel" />
    </Carousel.Item>
  </Carousel>
  );
}

export default Carousel;