import "./Services.css";
import data from "../../Json/Data/data";
import arrowb from '../../assets/arrowb.svg';
import closei from '../../assets/closei.svg';
import { useState } from "react";


const Services = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="wrraper">
      <h2 className="maine-title">SERVICES</h2>
      <div className="services">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>
                {selected === i ? '-' : '+'}
                <img src={closei} alt="close-icon" />
                <img src={arrowb} alt="arrowb" />
              </span>
            </div>
            <div 
              className={
                selected === i ? 'answer show' : 'answer'
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;