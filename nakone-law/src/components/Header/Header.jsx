import "./Header.css";
import logo from "../../assets/logo.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import arroww from "../../assets/arroww.svg";

const Header = ({ phoneNumber, consultation }) => (
  <header className="header">
    <a href="#home">
      <img src={logo} className="app-logo" alt="logo" />
    </a>

    <Button href={`tel:${phoneNumber}`} className="phone-number-button">
      847-391-1008
    </Button>

    <Button href={consultation} className="consultation-header-button">
      CONSULTATION
      <img src={arroww} className="banner-button-arrow" alt="arrowb" />
    </Button>

    <Navigation className="navigation" />
  </header>
);

export default Header;
