import React, { useState } from "react";
import data from "../../Json/Data/data";
import arrowb from "../../assets/arrowb.svg";
import closei from "../../assets/closei.svg";
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
    <div className="wrapper-service">
      <h2 className="main-title-service">SERVICES</h2>
      <div className="services">
        {data.map((item, i) => (
          <div className="item-service" key={i}>
            <div className="title-service" onClick={() => toggle(i)}>
              <img
                src={item.image}
                className="number-service number-service-plan"
                alt="number"
              />
              <h2>{item.question}</h2>
              <span>
                {selected === i ? (
                  <img src={closei} alt="close-icon" />
                ) : (
                  <img src={arrowb} alt="arrow-icon" />
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
