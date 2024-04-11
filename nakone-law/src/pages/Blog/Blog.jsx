import './Blog.css';
import videoFirst from "../../assets/blog/videoFirst.svg";
import videoSecond from "../../assets/blog/videoSecond.svg";
import Button from '../../components/Button/Button';


const Blog = () => {
  return (
    <div className="container-blog">
      <h1 className="blog-title">BLOG</h1>

      <div className="video-carusel">
        
        <div className="video-blog">
          <a href="https://www.youtube.com/watch?v=3ZdR3rsKTvE">
            <img src={videoFirst} className="first-video" alt="videoFirst" />
          </a>
          <Button />
        </div>

        <div className="video-blog">
          <a href="https://www.youtube.com/watch?v=K4RH6QCnlxQ&t=21s">
            <img src={videoSecond} className="second-video" alt="videoSecond" />
          </a>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
