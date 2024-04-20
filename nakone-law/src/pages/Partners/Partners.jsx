import './Partners.css';
import dolynka from "../../assets/companies/dolynka.svg";
import insurance from "../../assets/companies/insurance.svg";
import radio from "../../assets/companies/radio.svg";
import selfreliance from "../../assets/companies/selfreliance.svg";


const Partners = () => {
  return (
    <div className="container-partners">
      <div className="block-partners">
        
        <div className="partners-item">
          <img src={dolynka} className="dolynka" alt="#dolynka" />
        </div>

        <div className="partners-item">
          <img src={insurance} className="insurance" alt="#insurance" />
        </div>

        <div className="partners-item">
          <img src={radio} className="radio" alt="#radio" />
        </div>

        <div className="partners-item">
          <img src={selfreliance} className="selfreliance" alt="#selfreliance" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
