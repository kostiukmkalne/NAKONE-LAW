import './Button.css';
import arroww from "../../assets/arroww.svg";

const Button = () => {
  return (
    <a 
      href="#button"
      className="button"
    >
      CONSULTATION
      <img src={arroww} alt="arrow" className="arrow" />
    </a>
  );
}

export default Button;