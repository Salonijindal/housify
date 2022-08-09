import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomMaps from "../CustomMaps/CustomMaps";
import "./Explore.scss";

const Explore = () => {
  const [location, setLocation] = useState({
    lat: 43.4516,
    lng: -80.4925,
  });

  const handleCityChange = (e) => {
    switch (e.target.value) {
      case "waterloo":
        setLocation({
          lat: 43.4643,
          lng: -80.5204,
        });
        break;
      case "kitchener":
        setLocation({
          lat: 43.4516,
          lng: -80.4925,
        });
        break;
      case "cambridge":
        setLocation({
          lat: 43.3616,
          lng: -80.3144,
        });
        break;
      default:
        setLocation({
          lat: 43.4516,
          lng: -80.4925,
        });
    }
  };
  return (
    <section className="explore">
      <div component="form" className="explore__search-form">
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          className="explore__search-input"
        >
          <InputLabel id="demo-simple-select-label">Select City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={"kitchener"}
            label="select city"
            onChange={handleCityChange}
          >
            <MenuItem value={"kitchener"}>Kitchener</MenuItem>
            <MenuItem value={"waterloo"}>Waterloo</MenuItem>
            <MenuItem value={"cambridge"}>Cambridge</MenuItem>
          </Select>
        </FormControl>
      </div>
      <CustomMaps location={location} zoomLevel={14} />
    </section>
  );
};

export default Explore;
