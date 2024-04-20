import React, { useState, useEffect } from "react";
import "./Blog.css";
import videoFirst from "../../assets/blog/videoFirst.svg";
import videoSecond from "../../assets/blog/videoSecond.svg";
import Button from "../../components/Button/Button";

const Blog = () => {
  const [videoURL, setVideoURL] = useState({
    videoFirst: "https://www.youtube.com/watch?v=3ZdR3rsKTvE",
    videoSecond: "https://www.youtube.com/watch?v=K4RH6QCnlxQ&t=21s",
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
        <div className="video-blog-1">
          <img src={videoFirst} className="video-img-1" alt="videoFirst" />
          <h2 className="video-name-1">
            How to Bring a Husband and Children to America
          </h2>
          <Button
            onClick={() => handleVideoButtonClick(videoURL.videoFirst)}
            className="video-button-1"
          >
            WATCH NOW
          </Button>
        </div>

        <div className="video-blog-2">
          <img src={videoSecond} className="video-img-2" alt="videoSecond" />
          <h2 className="video-name-2">
            How to Bring a Wife and Children to America
          </h2>
          <Button
            onClick={() => handleVideoButtonClick(videoURL.videoSecond)}
            className="video-button-2"
          >
            WATCH NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
