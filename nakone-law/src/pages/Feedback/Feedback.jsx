import star from '../../assets/star.svg';
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="content">
      <h1 className="feedback-title">FEEDBACK FROM OUR CLIENTS</h1>

      <div className="cards">
        <div className="card">
          <h1 className="user-name">Nataliia</h1>

          <div className="stars">
            <img src={star} alt="client-feedbacks" className="star" />
            <img src={star} alt="client-feedbacks" className="star" />
            <img src={star} alt="client-feedbacks" className="star" />
            <img src={star} alt="client-feedbacks" className="star" />
            <img src={star} alt="client-feedbacks" className="star" />
          </div>

          <div className="case">
            <p className="text">
              Olga was very patient with me, always answered my questions and
              gave me objective counsel I knew I could trust. She hard work and
              diligence resulted in a favorable outcome in my case. I would
              highly recommend Mrs.Olga Nakonechna
            </p>
          </div>
        </div>

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
              One-stop shop for all your immigration, translation and notary
              needs! Olga is very knowledgeable, attentive and always provides
              an excellent service! Thank you!
            </p>
          </div>
        </div>

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
              She approached the free consultation very professionally. Does not
              impose its services. She puts his professionalism above profit. I
              recommend!
              <br />
            </p>
          </div>
        </div>

        <div className="card">
          <h1 className="user-name">Victor</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">
              Nakone Law made my employment-based smooth and successful. Olga's
              expertise and attention to detail were invaluable, ensuring prompt
              fulfillment of all requirements. Highly recommend Nakone Law for
              immigrationmatters.
            </p>
          </div>
        </div>

        <div className="card">
          <h1 className="user-name">Evgen</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">
              Finally I`m a citisen of United States of America! It was a
              stressful and a long journey. But We Did It! Thank You! Great job!
            </p>
          </div>
        </div>

        <div className="card">
          <h1 className="user-name">Bohdan M.</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">
              Nakone Law facilitated a seamless employment-based process. Olga's
              expertise ensured all requirements were met promptly. Highly
              recommend for immigration matters.
            </p>
          </div>
        </div>

        <div className="card">
          <h1 className="user-name">Olga P.</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">
              Many many thanks! She solved my problem what other lawyars refused
              to take it. RECOMEND!!!
            </p>
          </div>
        </div>

        <div className="card">
          <h1 className="user-name">Steve M.</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">
              I relied on Nakone Law for my visa extension. Olga ensured a
              smooth process, addressing all concerns. Highly recommend for
              immigration needs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;