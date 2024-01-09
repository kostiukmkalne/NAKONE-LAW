import './Header.css';
import logo from '../../../assets/logo.svg';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <a href="#home">
      <img 
        src={logo} 
        className="App-logo" 
        alt="logo" 
      />
    </a>

    <Navigation />
  </header>
);

export default Header;