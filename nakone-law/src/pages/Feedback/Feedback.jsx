import Card from '../../components/Card/Card';
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="content">
      <h1 className="feedback-title">FEEDBACK FROM OUR CLIENTS</h1>

      <div className="feedback-container">

        <Card
          title="Nataliia"
          text="Olga was very patient with me, always answered my
            questions and gave me objective counsel
            I knew I could trust. She hard work and
            diligence resulted in a favorable outcome in my case.
            I would highly recommend Mrs.Olga Nakonechna"
        />

        <Card
          title="Stan B."
          text="One-stop shop for all your immigration, translation
            and notary needs! Olga is very knowledgeable,
            attentive and always provides an excellent service!
            Thank you!"
        />

        <Card
          title="Greg S."
          text="Excellent service, fest, and very helpful!"
        />

        <Card
          title="Yaroslav K."
          text="She approached the free consultation very professionally.
            Does not impose its services.
            She puts his professionalism above profit. I recommend!"
        />
      </div>
    </div>
  );
};

export default Feedback;