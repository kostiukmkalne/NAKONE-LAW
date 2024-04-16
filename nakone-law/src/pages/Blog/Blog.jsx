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

  return (
    <div className="container-blog">
      <h1 className="blog-title">BLOG</h1>

      <div className="video-carusel">
        
        <div className="video-blog">
          <img src={videoFirst} className="video-img" alt="videoFirst" />
          <h2 className="video-name">
            How to Bring a Husband and Children to America
          </h2>
          <Button>
            <a href={videoURL.videoFirst} className="video-button" />
            WATCH NOW
          </Button>
        </div>

        <div className="video-blog-2">
          <img src={videoSecond} className="video-img-2" alt="videoSecond" />
          <h2 className="video-name-2">
            How to Bring a Wife and Children to America
          </h2>
          <Button>
            <a href={videoURL.videoSecond} className="video-button-2" />
            WATCH NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
