import "./Slider.css";
import personalImg from '../../assets/wooman.svg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Slider = () => {
  return (
    <div 
      className="container" 
      {...settings}
    >
      <div>
        <img src={personalImg} alt="personalImg" className="slider" />
      </div>
      <div>
        <img src={personalImg} alt="personalImg" className="slider" />
      </div>
      <div>
        <img src={personalImg} alt="personalImg" className="slider" />
      </div>
      <div>
        <img src={personalImg} alt="personalImg" className="slider" />
      </div>
      <div>
        <img src={personalImg} alt="personalImg" className="slider" />
      </div>
    </div>
  );
}

export default Slider;
