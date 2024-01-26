import React, { useState } from "react";
import data from "../../Json/Data/data";
import arrowBlack from "../../assets/arrowb.svg";
import closeIcon from "../../assets/closei.svg";
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
              <h2>{item.question}</h2>
              <span>
                {selected === i ? (
                  <img src={closeIcon} alt="close-icon" />
                ) : (
                  <img src={arrowBlack} alt="arrowb" />
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