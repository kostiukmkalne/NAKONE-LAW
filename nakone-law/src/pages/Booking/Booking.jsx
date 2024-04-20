import './Booking.css';
import Form from '../../components/Form/Form';

const Booking = () => {
  return (
    <div className="container-booking">
      <h1 className="main-title-booking">BOOK A CONSULTATION</h1>

      <div className="case-booking">
        <div className="text-case-booking">
          <h2 className="title-booking">
            MAKE AN APPOINTMENT
            <br />
            FOR A CONSULTATION
          </h2>

          <h3 className="text-booking">
            after receiving your application, we will
            <br />
            review it as soon as possible and contact you
          </h3>
        </div>

        <div className="form-booking">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Booking;
