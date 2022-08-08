import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import "./Explore.scss";
const Explore = () => {
  return (
    <section className="explore">
      <div component="form" className="explore__search-form">
        <InputBase
          placeholder="Search Listings"
          inputProps={{ "aria-label": "search google maps" }}
          className="banner__search-input"
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Beds"
          inputProps={{ "aria-label": "search google maps" }}
          className="banner__search-input"
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Bath"
          inputProps={{ "aria-label": "search google maps" }}
          className="banner__search-input"
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
    </section>
  );
};

export default Explore;
