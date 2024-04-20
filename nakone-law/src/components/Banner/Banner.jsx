import './Banner.css';
import bannerlogo from '../../assets/bannerlogo.svg';
import Button from '../Button/Button';
import arrowb from "../../assets/arrowb.svg";

const Banner = () => (
  <div className="banner">
    <a href="#home">
      <img src={bannerlogo} className="banner-logo" alt="banner-logo" />
    </a>

    <p className="banner-text">
      Legal services in the field of immigration law in the United States
    </p>

    <Button className="banner-button">
      CONSULTATION
      <img src={arrowb} className="banner-button-arrow" alt="arrowb" />
    </Button>
  </div>
);

export default Banner;
