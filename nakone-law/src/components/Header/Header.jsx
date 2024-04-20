import "./Header.css";
import logo from "../../assets/logo.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import arroww from "../../assets/arroww.svg";
import eng from '../../assets/language/eng.svg';
import ua from '../../assets/language/ua.svg';


const Header = ({ phoneNumber, consultation }) => (
  <header className="header">
    <a href="#home">
      <img src={logo} className="app-logo" alt="logo" />
    </a>

    <Button href={`tel:${phoneNumber}`} className="phone-number-button">
      847-391-1008
    </Button>

    <Navigation className="navigation" />

    <Button href={consultation} className="consultation-header-button">
      CONSULTATION
      <img src={arroww} className="banner-button-arrow" alt="arrowb" />
    </Button>

    <div className="language-block">

      <a href="#home">
        <img src={eng} className="eng-language" alt="#eng" />
      </a>

      <a href="#home">
        <img src={ua} className="ua-language" alt="#ua" />
      </a>
    </div>
  </header>
);

export default Header;
