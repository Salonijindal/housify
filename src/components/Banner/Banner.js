import React from "react";
import video from "../../assets/videos/banner-video.mp4";
import "./Banner.scss";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

const Banner = () => {
  return (
    <div className="banner">
      <video className="banner__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <Stack className="banner__content" direction="Column" spacing={3}>
        <h1>Your Dream Home is Waiting For You.</h1>
        <p>
          HousBidy helps you explore all available listings in the Kitchener,
          Cambridge and Waterloo region. Buyers can obtain and bid on your dream
          home.
        </p>
        <Link className="banner__link" to={"/explore"}>
          <button className="banner__button">Explore</button>
        </Link>
      </Stack>
    </div>
  );
};

export default Banner;
