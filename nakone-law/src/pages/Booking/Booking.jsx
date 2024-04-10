import './Booking.css';
import Form from '../../components/Form/Form';

const Booking = () => {
  return (
    <div className="container">
      <h1 className="consultation-title">BOOK A CONSULTATION</h1>

      <div className="case">

        <div className="text-case">

          <h2 className="title">
            MAKE AN APPOINTMENT
            <br />
            FOR A CONSULTATION
          </h2>

          <h3 className="text">
            after receiving your application, we will
            <br />
            review it as soon as possible and contact you
          </h3>
        </div>

        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Booking;