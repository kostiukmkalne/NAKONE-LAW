import './Banner.css';
import banner from '../../assets/banner.svg';

const Banner = () => (
  <div className="banner">
    <a href="#home">
      <img src={banner} className="banner-img" alt="banner" />
    </a>

    <p className="banner-text">
      Legal services in the field of immigration law in the United States
    </p>
  </div>
);

export default Banner;