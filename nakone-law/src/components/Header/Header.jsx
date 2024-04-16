import "./Header.css";
import logo from "../../assets/logo.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";

const Header = ({ phoneNumber }) => (
  <header className="header">
    <a href="#home">
      <img src={logo} className="app-logo" alt="logo" />
    </a>

    <Button>
      <a href={ phoneNumber } className="phone-number">
        {`tel:+1 (847)391-1008`}
      </a>
    </Button>
    
    <Button>
      <span className="consultation-header">CONSULTATION</span>
    </Button>
    <Navigation className="navigation" />
  </header>
);

export default Header;
