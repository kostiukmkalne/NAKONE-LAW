import './Button.css';
import arrow from "../../assets/arrow-white.svg";

const Button = () => {
  return (
    <a 
      href="button" 
      className="button"
    >
      CONSULTATION
      <img src={arrow} alt="arrow" className="arrow" />
    </a>
  );
}

export default Button;