import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Listings from "../../components/Listings/Listings";
import "./LandingPage.scss";
import axios from "axios";

const LandingPage = () => {
  const [kitchenerData, setKitchenerData] = useState([]);
  const [cambridgeData, setCambridgeData] = useState([]);
  const [waterlooData, setWaterlooData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("https://housbidy-api.herokuapp.com/listings")
      .then((response) => {
        const listingData = response.data;
        setKitchenerData(
          listingData.filter((item) => {
            return item.Property.Address.AddressText.includes("Kitchener");
          })
        );
        setCambridgeData(
          listingData.filter((item) => {
            return item.Property.Address.AddressText.includes("Cambridge");
          })
        );
        setWaterlooData(
          listingData.filter((item) => {
            return item.Property.Address.AddressText.includes("Waterloo");
          })
        );
        setError(false);
      })
      .catch((err) => {
        console.log("Couldnt fetch a listing", err);
        setError(true);
      });
  }, []);

  return (
    <>
      <Banner />
      <section className="landing-page">
        {!error && <Listings listing={kitchenerData} title="Kitchener" />}
        {!error && <Listings listing={waterlooData} title="Waterloo" />}
        {!error && <Listings listing={cambridgeData} title="Cambridge" />}
      </section>
    </>
  );
};

export default LandingPage;
