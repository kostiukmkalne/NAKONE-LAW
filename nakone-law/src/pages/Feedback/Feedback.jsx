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
          <h1 className="user-name">Nadiia K.</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">
              20 minutes of consultation and Olga answered all my questions with
              all the details and specific suggestions. Great job Olga! Thank
              you to the moon and back!
            </p>
          </div>
        </div>

        <div className="card">
          <h1 className="user-name">SOCIAL</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">
              Very helpful and knowledgeable lawyer. Olga helped me to fix a
              case I started myself.
            </p>
          </div>
        </div>

        <div className="card">
          <h1 className="user-name">Ludmila M.</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">
              Atty Olga Nakonechna and her office handled my case with extreme
              proficiency and attention. The most important part for me after
              switching from another lawyer was honesty and certainly care for
              my case and me as a client. I recommended and keep recommending
              Atty Nakonechna for her accuracy, attention, honesty, care and
              proficiency.
            </p>
          </div>
        </div>

        <div className="card">
          <h1 className="user-name">AGRATTA GLOBAL</h1>

          <div className="stars">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
          </div>

          <div className="case">
            <p className="text">Best immigration attorney in Chicagoland !</p>
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
              I confirm the previous reviews. Thanks for the help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;