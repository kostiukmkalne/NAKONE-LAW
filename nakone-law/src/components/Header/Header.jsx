import "./Header.css";
import logo from "../../assets/logo.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";

const Header = ({ phoneNumber, consultation }) => (
  <header className="header">
    <a href="#home">
      <img src={logo} className="app-logo" alt="logo" />
    </a>

    <Button href={phoneNumber} className="phone-number-button">
      {phoneNumber}
    </Button>

    <Button href={consultation} className="consultation-header">
      CONSULTATION
    </Button>

    <Navigation className="navigation" />
  </header>
);

export default Header;
