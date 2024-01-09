import './Footer.css';
import arrowf from '../../assets/arrow-footer.svg';
import Button from '../components/Button/Button';

const Footer = () => {
  <footer className="footer">

    <img 
      src={arrowf} 
      alt="#arrow-footer" 
      className="arrow-footer" 
    />

    <p className="footer-text">
      With One Vision and Double the Passion We're Eagerly Listening on Behance
      Ready to Turn Your Ideas into Art.
    </p>

    <Button 
      // а тут мені треьа прописувати кожну кнопку відповідно до моїх запитів футера?
    />
  </footer>;
}

export default Footer;