import './Banner.css';
import banner from "../assets/banner.svg";

const Banner = () => (
  <div className="banner">
    <a href="#home">
      <img
        src={banner} 
        className="banner-img" 
        alt="banner" 
      />
    </a>
  </div>
);

export default Banner;