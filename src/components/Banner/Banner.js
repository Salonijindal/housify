import React from "react";
import video from "../../assets/videos/banner-video.mp4";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <video className="banner__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="banner-title">
        <h1>Your Dream Home is Waiting For You.</h1>
      </div>
    </div>
  );
};

export default Banner;
