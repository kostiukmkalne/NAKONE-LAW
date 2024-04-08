import React, { useState } from "react";
import data from "../../Json/Data/data";
import arrowb from "../../assets/arrowb.svg";
import closei from "../../assets/closei.svg";
import numb1 from "../../assets/numbers/numb1.svg";
import numb2 from "../../assets/numbers/numb2.svg";
import numb3 from "../../assets/numbers/numb3.svg";

import numb5 from "../../assets/numbers/numb5.svg";
import numb6 from "../../assets/numbers/numb6.svg";
import "./Services.css";

const Services = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrraper">
      <h2 className="main-title">SERVICES</h2>

      <div className="services">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <div>
                <img src={numb1} className="number" alt="number" />
                <title>FAMILY IMMIGRATION</title>
              </div>

              <div>
                <img src={numb2} className="number" alt="number" />
                <title>IMMIGRATION THROUGH EMPLOYMENT</title>
              </div>

              <div>
                <img src={numb3} className="number" alt="number" />
                <title>CHANGE AND EXSTENSION OF STAY IN THE USA</title>
              </div>

              <div>
                <img src={numb5} className="number" alt="number" />
                <title>TYPES OF NON-IMMIGRANT VISAS</title>
              </div>

              <div>
                <img src={numb6} className="number" alt="number" />
                <title>VISAS FOR THE BRIDE AND GROOM</title>
              </div>
              <h2>{item.question}</h2>
              <span>
                {selected === i ? (
                  <img src={closei} alt="close-icon" />
                ) : (
                  <img src={arrowb} alt="arrowb" />
                )}
              </span>
            </div>
            <div className={selected === i ? "answer show" : "answer"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
