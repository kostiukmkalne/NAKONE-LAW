import React, { useEffect } from "react";
import "./Achivements.css";

const Achivements = () => {
  useEffect(() => {

   const counts = document.querySelectorAll(".count");
    const speed = 97;

    counts.forEach((counter) => {
      function updateCounter() {
        const targetAttr = counter.getAttribute("data-target");
            const target = Number(targetAttr.replace(/\D/g, ""));
        const count = Number(counter.innerText);
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.floor(count + increment);
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = targetAttr;}
      }

      updateCounter();
    });
  }, []);

  return (
    <div className="counter-wrapper">
      <h2 className="achiv-title">ACHIEVEMENTS</h2>

      <div className="counter">
        <p className="text-count">
          SATISFIED
          <br />
          CLIENTS
        </p>

        <h1 className="count" data-target="1000+">
          0
        </h1>
      </div>

      <div className="counter">
        <p className="text-count">
          SOLVED
          <br />
          CASES
        </p>

        <h1 className="count" data-target="800+">
          0
        </h1>
      </div>
    </div>
  );
};

export default Achivements;
