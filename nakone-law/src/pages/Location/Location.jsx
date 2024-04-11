import './Location.css';
import location from '../../assets/location.svg';

const Location = () => {
  return (
    <div className="local-container">
      <h1 className="title-local">LOCATION</h1>

      <a href="https://www.google.com/maps/place/Nakone+Law+-+Immigration+Attorney+Olga+Nakonechna/@42.04038,-87.8909871,17z/data=!3m1!4b1!4m6!3m5!1s0x880fb708cb357ed3:0x12c5c184ebd12b34!8m2!3d42.040376!4d-87.8884122!16s%2Fg%2F11lfbj14cy?entry=ttu">
        <img src={location} className="location" alt="location" />
      </a>
    </div>
  );
};

export default Location;
