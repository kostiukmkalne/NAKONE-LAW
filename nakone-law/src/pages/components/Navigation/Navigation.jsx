import "./Navigation.css";

const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">

      <li className="nav__item">
        <a 
          className="nav__link" 
          href="#home"
        >
          Home
        </a>
      </li>

      <li className="nav__item">
        <a 
          className="nav__link" 
          href="#service"
        >
          Services
        </a>
      </li>

      <li className="nav__item">
        <a 
          className="nav__link" 
          href="#about_us"
        >
          About Us
        </a>
      </li>

      <li className="nav__item">
        <a 
          className="nav__link" 
          href="#blog"
        >
          Blog
        </a>
      </li>

      <li className="nav__item">
        <a 
          className="nav__link" 
          href="#contact_us"
        >
          Contact Us
        </a>
      </li>

    </ul>
  </nav>
);

export default Navigation;