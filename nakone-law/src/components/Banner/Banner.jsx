import './Banner.css';
import bannerlogo from '../../assets/bannerlogo.svg';
import Button from '../Button/Button';
import arrowb from "../../assets/arrowb.svg";
import phone from '../../assets/phone.svg';
import chat from '../../assets/chat.svg';


const Banner = () => (
  <div className="banner">
    <a href="#home">
      <img src={bannerlogo} className="banner-logo" alt="banner-logo" />
    </a>

    <p className="banner-text">
      Legal services in the field of immigration law in the United States
    </p>

    <Button className="banner-button">
      CONSULTATION
      <img src={arrowb} className="banner-button-arrow" alt="arrowb" />
    </Button>

    <div className="comunication-buttons">
      <Button className="banner-button-phone">
        <a href="tel:+1 (847)391-1008">
          <img src={phone} className="phone-logo" alt="phone" />
        </a>
      </Button>

      <Button className="banner-button-chat">
        <img src={chat} className="chat-logo" alt="chat" />
      </Button>
    </div>
  </div>
);

export default Banner;
