import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Listings from "../../components/Listings/Listings";
import "./LandingPage.scss";
import axios from "axios";

const LandingPage = () => {
  const [listing, setListing] = useState([]);
  const [kitchenerData, setKitchenerData] = useState([]);
  const [cambridgeData, setCambridgeData] = useState([]);
  const [waterlooData, setWaterlooData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("This will run when component renders");
    axios
      .get("http://localhost:8080/listings")
      .then((response) => {
        const listingData = response.data;
        console.log("listingData", listingData);
        setListing(listingData);
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
