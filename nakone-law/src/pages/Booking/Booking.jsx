import './Booking.css';
import Form from '../../components/Form/Form';

const Booking = () => {
  return (
    <div className="consultation-container">
      <h1 className="consultation-title">BOOK A CONSULTATION</h1>

      <div className="appointment-case">
        <h2 className="appointment">
          MAKE AN APPOINTMENT
          <br />
          FOR A CONSULTATION
        </h2>

        <h3 className="appointment-text">
          after receiving your application, we will review it
          <br />
          as soon as possible and contact you
        </h3>
      </div>
      <div className="contacts">
        <Form />
      </div>
    </div>
  );
};

export default Booking;