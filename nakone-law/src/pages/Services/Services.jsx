import React, { useState } from "react";
import data from "../../Json/Data/data";
import arrowb from "../../assets/arrowb.svg";
import closei from "../../assets/closei.svg";
import "./Services.css";

const numbImages = [
  require("../../assets/numbers/numb1.svg"),
  require("../../assets/numbers/numb2.svg"),
  require("../../assets/numbers/numb3.svg"),
  require("../../assets/numbers/numb4.svg"),
  require("../../assets/numbers/numb5.svg"),
  require("../../assets/numbers/numb6.svg"),
];

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
              {numbImages.map((numb, index) => (
                <div key={index}>
                  <img src={numb} className="number" alt="number" />
                  {item.titles && item.titles[index] && (
                    <title>{item.titles[index]}</title>
                  )}
                </div>
              ))}
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
