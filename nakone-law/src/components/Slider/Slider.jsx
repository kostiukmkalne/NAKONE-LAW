import "./Slider.css";
import olga from '../../assets/olga.svg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Slider = () => {
  return (
    <Slider {...settings}>
      <div>
        <img src={olga} alt="olga" className="slider" />
      </div>
      <div>
        <img src={olga} alt="olga" className="slider" />
      </div>
      <div>
        <img src={olga} alt="olga" className="slider" />
      </div>
    </Slider>
  );
}

export default Slider;
