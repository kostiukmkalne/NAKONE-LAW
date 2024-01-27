import './Booking.css';

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

        <form
          action="#"
          method="get"
          onsubmit={(e) => {e.preventDefault(); }}
          class="contacts-form"
        >
          <label>
            <input
              class="contacts-field"
              type="text"
              name="first name"
              placeholder="First Name"
              required
            >
          </label>

          <label>
            <input
              class="contacts-field"
              type="text"
              name="last name"
              placeholder="Last Name"
              required
            >
          </label>

          <label>
            <input
              class="contacts-field"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            >
          </label>

          <label>
            <input
              class="contacts-field"
              type="email"
              name="email"
              placeholder="Email"
              required
            >
          </label>

          <label>
            <textarea
              class="contacts-field"
                name="message"
                type="text"
                placeholder="Message"
                required
                cols="30"
                rows="10"
            ></textarea>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Booking;