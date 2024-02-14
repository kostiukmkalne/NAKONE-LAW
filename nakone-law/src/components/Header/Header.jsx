import './Header.css';
import logo from '../../assets/logo.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Header = () => (
  <header className="header">
    <a href="#home">
      <img src={logo} className="app-logo" alt="logo" />
    </a>

    <Button>
      <a href="button" className="button">
    
      </a>
    </Button>
    <Navigation />
    <Button />
  </header>
);

export default Header;