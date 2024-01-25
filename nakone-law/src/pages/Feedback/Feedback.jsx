import star from '../../assets/star.svg';
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="content">
      <h1 className="feedback-title">FEEDBACK FROM OUR CLIENTS</h1>

      <div className="card">
        <h1 className="user-name">Nataliia</h1>

        <div className="stars">
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
        </div>

        <div className="case">
          <p className="text">
            Olga was very patient with me, always answered my
            <br />
            questions and gave me objective counsel
            <br />
            I knew I could trust. She hard work and
            <br />
            diligence resulted in a favorable outcome in my case.
            <br />
            I would highly recommend Mrs.Olga Nakonechna
            <br />
          </p>
        </div>
      </div>

      {/* second one */}

      <div className="card">
        <h1 className="user-name">Stan B.</h1>

        <div className="stars">
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
        </div>

        <div className="case">
          <p className="text">
            One-stop shop for all your immigration, translation
            <br />
            and notary needs! Olga is very knowledgeable,
            <br />
            attentive and always provides an excellent service!
            <br />
            Thank you!
          </p>
        </div>
      </div>

      {/* third One */}

      <div className="card">
        <h1 className="user-name">Greg S.</h1>

        <div className="stars">
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
        </div>

        <div className="case">
          <p className="text">Excellent service, fest, and very helpful!</p>
        </div>
      </div>

      {/* forth one  */}

      <div className="card">
        <h1 className="user-name">Yaroslav K.</h1>

        <div className="stars">
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
        </div>

        <div className="case">
          <p className="text">
            She approached the free consultation very professionally.
            <br />
            Does not impose its services.
            <br />
            She puts his professionalism above profit. I recommend!
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;