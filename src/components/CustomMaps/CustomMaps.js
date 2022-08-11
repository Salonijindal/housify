import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { Link } from "react-router-dom";
import Zoom from "@mui/material/Zoom";
import "./CustomMaps.scss";
import { Tooltip } from "@mui/material";
const LocationPin = ({ text, Id }) => (
  <div className="pin">
    <Tooltip title={text} arrow TransitionComponent={Zoom}>
      <Link key={Id} to={`/listing/${Id}`}>
        <IconButton className="pin-icon">
          <LocationOnIcon color="primary" fontSize="large" />
        </IconButton>
      </Link>
    </Tooltip>
  </div>
);

const CustomMaps = ({ location, zoomLevel }) => {
  const [mapData, setMapData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/listings")
      .then((res) => {
        const data = res.data.map((item) => {
          return {
            lat: item.Property.Address.Latitude,
            long: item.Property.Address.Longitude,
            address: item.Property.Address.AddressText,
            id: item.Id,
          };
        });
        setMapData(data, () => console.log(mapData));
      })
      .catch((err) => {
        console.log("Couldnt fetch a listing", err);
      });
  }, [mapData]);
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDvLUm0FpK0eYFKwR5rz_u5I7bUuwAS_JA" }}
          center={location}
          zoom={zoomLevel}
        >
          {mapData &&
            mapData.map((d, index) => {
              return (
                <LocationPin
                  key={`${d.id}-${index}`}
                  lat={d.lat}
                  lng={d.long}
                  text={d.address}
                  Id={d.id}
                />
              );
            })}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default CustomMaps;
