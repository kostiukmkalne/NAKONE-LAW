import './Footer.css';
import arrowf from '../../assets/arrow-footer.svg';
import whatsup from '../../assets/social/whatsup.svg';
import youtube from '../../assets/social/youtube.svg';
import insta from '../../assets/social/insta.svg';
import facebook from '../../assets/social/facebook.svg';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="text-block-footer">
        <img src={arrowf} className="arrow-footer" alt="#arrow-footer" />

        <p className="text-footer">
          With One Vision and Double the Passion
          <br />
          We're Eagerly Listening on Behance
          <br />
          Ready to Turn Your Ideas into Art.
        </p>

        <p className="adds">© Nakone Law 2024</p>
      </div>

      <div className="social-block">
        <p className="social-text">Social</p>

        <a href="https://www.instagram.com/olga_immigration_attorney?igsh=cWhhZmIyamdoM3R5">
          <img src={insta} alt="instagram" className="social-icons" />
        </a>

        <a href="https://www.facebook.com/nakonelaw?mibextid=LQQJ4d">
          <img src={facebook} alt="facebook" className="social-icons" />
        </a>

        <a href="tel:+1 (847)391-1008">
          <img src={whatsup} alt="what`s-up" className="social-icons" />
        </a>

        <a href="https://www.youtube.com/@NakoneLaw">
          <img src={youtube} alt="youtube" className="social-icons" />
        </a>
      </div>

      <div className="contacts-block">
        <p className="contacts-text">Contacts</p>
        <a href="mailto:office@nakonelaw.com" className="email-info">
          office@nakonelaw.com
        </a>

        <br />

        <a href="tel:+1 (847)391-1008" className="phone-number-info">
          +1 (847)391-1008
        </a>

        <p className="location-block">Location</p>
        <a
          href="https://www.google.com/maps/place/Nakone+Law+-+Immigration+Attorney+Olga+Nakonechna/@42.04038,-87.8909871,17z/data=!3m1!4b1!4m6!3m5!1s0x880fb708cb357ed3:0x12c5c184ebd12b34!8m2!3d42.040376!4d-87.8884122!16s%2Fg%2F11lfbj14cy?entry=ttu"
          target="blank"
          class="location-text-info"
        >
          701 Lee St #610, Des Plaines, IL 60016
        </a>
      </div>
    </footer>
  );
};

export default Footer;
