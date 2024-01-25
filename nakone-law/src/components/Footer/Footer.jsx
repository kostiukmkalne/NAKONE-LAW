import './Footer.css';
import arrowf from '../../assets/arrow-footer.svg';
import whats from '../../assets/social/whats.svg';
import youtube from '../../assets/social/youtube.svg';
import insta from '../../assets/social/insta.svg';
import facebook from '../../assets/social/facebook.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="arrow-text">
        <img src={arrowf} alt="#arrow-footer" className="arrow-footer" />

        <p className="footer-text">
          With One Vision and Double the Passion
          <br />
          We're Eagerly Listening on Behance
          <br />
          Ready to Turn Your Ideas into Art.
        </p>
      </div>

      <div className="social">
        <p className="social-text">Social</p>

        <img src={whats} alt="what`s-up" className="icons" />
        <img src={youtube} alt="youtube" className="icons" />
        <img src={insta} alt="instagram" className="icons" />
        <img src={facebook} alt="facebook" className="icons" />
      </div>

      <div className="contacts">
        <p className="contacts-text">Contacts</p>
        <a href="mailto:nakonelaw.com" className="email">
          nakonelaw.com
        </a>

        <br />

        <a href="tel:+1 (847)612-0273" className="phone_number">
          +1 (847)612-0273
        </a>

        <p className="location">Location</p>
        <a
          href="https://www.google.com/maps/place/Nakone+Law+-+Immigration+Attorney+Olga+Nakonechna/@42.04038,-87.8909871,17z/data=!3m1!4b1!4m6!3m5!1s0x880fb708cb357ed3:0x12c5c184ebd12b34!8m2!3d42.040376!4d-87.8884122!16s%2Fg%2F11lfbj14cy?entry=ttu"
          target="blank"
          class="location-text"
        >
          701 Lee St #610, Des Plaines, IL 60016
        </a>
      </div>
    </footer>
  );
};

export default Footer;