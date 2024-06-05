import React, { useState, useEffect } from "react";
import "./Blog.css";
import videoFirst from "../../assets/blog/videoFirst.svg";
import videoSecond from "../../assets/blog/videoSecond.svg";
import Button from "../../components/Button/Button";

const Blog = () => {
  const [videoURL, setVideoURL] = useState({
    videoFirst: "https://www.youtube.com/watch?v=3ZdR3rsKTvE",
    videoSecond: "https://www.youtube.com/watch?v=K4RH6QCnlxQ&t=21s",
    videoThird: "https://www.youtube.com/watch?v=zLhMlceW8LU&t=2s",
    videoFourth: "https://www.youtube.com/watch?v=azZM7TERV2U&t=44s",
    videoFifth: "https://www.youtube.com/watch?v=xbeE3XjrAzk",
  });

  useEffect(() => {
    console.log("New video URL:", videoURL);
  }, [videoURL]);

  const handleVideoButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="page-blog">
      <h1 className="blog-title">BLOG</h1>

      <div className="container-videos">
        <div className="video-blog">
          <img src={videoFirst} className="video-img" alt="videoFirst" />
          <h2 className="video-name">
            How to Bring a Husband and Children to America
          </h2>
          <Button
            onClick={() => handleVideoButtonClick(videoURL.videoFirst)}
            className="video-button"
          >
            WATCH NOW
          </Button>
        </div>

        <div className="video-blog">
          <img src={videoSecond} className="video-img" alt="videoSecond" />
          <h2 className="video-name">Changes Under the U4U and TPS Program</h2>
          <Button
            onClick={() => handleVideoButtonClick(videoURL.videoSecond)}
            className="video-button"
          >
            WATCH NOW
          </Button>
        </div>

        <div className="video-blog">
          <img src={videoFirst} className="video-img" alt="videoFirst" />
          <h2 className="video-name">Re-Parole. U4U</h2>
          <Button
            onClick={() => handleVideoButtonClick(videoURL.videoThird)}
            className="video-button"
          >
            WATCH NOW
          </Button>
        </div>

        <div className="video-blog">
          <img src={videoSecond} className="video-img" alt="videoSecond" />
          <h2 className="video-name">Advantages And Disadvantages of U4U</h2>
          <Button
            onClick={() => handleVideoButtonClick(videoURL.videoFourth)}
            className="video-button"
          >
            WATCH NOW
          </Button>
        </div>

        <div className="video-blog">
          <img src={videoFirst} className="video-img" alt="videoFirst" />
          <h2 className="video-name-long">
            exemption from payment when applying for re-parole and work permit?
          </h2>
          <Button
            onClick={() => handleVideoButtonClick(videoURL.videoFifth)}
            className="video-button"
          >
            WATCH NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;


