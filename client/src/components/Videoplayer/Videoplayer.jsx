import "./Videoplayer.css";

const Videoplayer = () => {
  return (
    <div className="vpContainer">
      <div className="vpIFrameWrapper">
        <iframe
          className="vpIFrame"
          src="https://www.youtube.com/embed/B1CPE6WWsAQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Videoplayer;
