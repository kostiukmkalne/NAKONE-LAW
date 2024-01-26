import user from '../../assets/user.svg';
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="content">
      <h1 className="feedback-title">FEEDBACK FROM OUR CLIENTS</h1>

      <div className="card">
        <img src={user} alt="user" className="user" />

        <div className="case">
          <h1 className="user-name">NATALIIA</h1>

          <p className="text">
            Olga was very patient with me, always
            <br />
            answered my questions and gave me
            <br />
            objective counsel I knew I could trust.
            <br />
            She hard work and diligence resulted
            <br />
            in a favorable outcome in my case.
            <br />
            I would highly recommend
            <br />
            Mrs.Olga Nakonechna
          </p>
        </div>
      </div>

      <div className="card">
        <img src={user} alt="user" className="user" />

        <div className="case">
          <h1 className="user-name">NATALIIA</h1>

          <p className="text">
            Olga was very patient with me, always
            <br />
            answered my questions and gave me
            <br />
            objective counsel I knew I could trust.
            <br />
            She hard work and diligence resulted
            <br />
            in a favorable outcome in my case.
            <br />
            I would highly recommend
            <br />
            Mrs.Olga Nakonechna
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;