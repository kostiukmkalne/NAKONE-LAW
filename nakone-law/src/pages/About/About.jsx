import './About.css';
import videoImg from '../../assets/video-img.svg'; 

const About = () => {
  return (
    <div className="container-about">
      <h1 className="main-title-about">ABOUT US</h1>

      <div className="block-about">
        <div className="video-presentation">
          <a href="https://www.youtube.com/watch?v=wKSXgWQiCfM">
            <img src={videoImg} className="image" alt="video-img" />
          </a>
        </div>

        <div className="text-case-about">
          <h2 className="text-title-about">
            PROFESSIONAL LEGAL ASSISTANCE IN
            <br />
            MATTERS OF US IMMIGRATION LAW
          </h2>

          <h3 className="text-about">
            Nakone Law is a law office specializing exclusively in US
            immigration law. We will be happy to advise you and familiarize you
            with all the intricacies of immigration processes in the United
            States of America. We work with clients from all states and all
            countries of the world.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;