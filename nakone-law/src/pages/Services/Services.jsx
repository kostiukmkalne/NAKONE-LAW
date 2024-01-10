import "./Services.css";
import numb1 from '../../assets/numbers/numb1.svg';
import arrowb from '../../assets/arrowb.svg';
import close from '../../assets/close.svg';

const Services = () => {
  return (
    <section className="services">
      <h2 className="title">SERVICES</h2>
      <div>
        <a href="#family_immigration">
          <img src={numb1} alt="numbers" className="numbers" />
          <h4>FAMILY IMMIGRATION</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            eveniet exercitationem optio explicabo officiis cum sint? In non
            dolor quo doloribus saepe quos nostrum earum ipsum alias, maxime,
            tempora perferendis.
          </p>
          <a href="#services">
            <img src={arrowb} alt="arrow" className="arrow" />
          </a>

          <a href="#services">
            <img src={close} alt="close" className="close" />
          </a>
        </a>
      </div>
    </section>
  );
};

export default Services;