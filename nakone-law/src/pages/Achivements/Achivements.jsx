import "./Achivements.css";
import counts from '../../Json/Achive/achive';

const Achivements = () => {
  return (
    <div className="counter-wrapper">
      <div className="counter">
        <h1 className="count" data-target="1000+">0</h1>
        <p>SATISFIED CLIENTS</p>
      </div>

      <div className="counter">
        <h1 className="count" data-target="800+">0</h1>
        <p>SOLVED CASES</p>
      </div>
    </div>
  );
};

export default Achivements;