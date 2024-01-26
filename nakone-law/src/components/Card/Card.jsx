import star from "../../assets/star.svg";
import "./Card.css";

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <h2 className="user-name">
        {title}
      </h2>

      <div className="stars">
        <img src={star} alt="star" className="star" />
        <img src={star} alt="star" className="star" />
        <img src={star} alt="star" className="star" />
        <img src={star} alt="star" className="star" />
        <img src={star} alt="star" className="star" />
      </div>

      <div className="feedback-case">
        <p className="feedback-text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
