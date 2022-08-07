import React from "react";
import video from "../../assets/videos/banner-video.mp4";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <video className="banner__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div component="form" className="banner__search-form">
        <InputBase
          placeholder="Search Listings"
          inputProps={{ "aria-label": "search google maps" }}
          className="banner__search-input"
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Banner;
