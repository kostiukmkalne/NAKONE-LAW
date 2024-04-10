import './About.css';
import videoImg from '../../assets/video-img.svg'; 

const About = () => {
  return (
    <div className="container">
      <h1 className="main-title">ABOUT US</h1>

      <div className="block">
        <div className="video">
          <a href="https://www.youtube.com/watch?v=xbeE3XjrAzk&t=83s">
            <img src={videoImg} className="image" alt="video-img" />
          </a>
        </div>

        <div className="text-case">
          <h2 className="text-title">
            PROFESSIONAL LEGAL ASSISTANCE IN
            <br />
            MATTERS OF US IMMIGRATION LAW
          </h2>

          <h3 className="text">
            Nakone Law is a law office specializing exclusively in US immigration law. We will be
            <br />
            happy to advise you and familiarize you with all the intricacies of immigration
            <br />
            processes in the United States of America. We work with clients from all states
            <br />
            and all countries of the world.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;