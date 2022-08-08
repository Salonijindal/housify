import React from "react";
import Banner from "../../components/Banner/Banner";
import Listings from "../../components/Listings/Listings";
import "./LandingPage.scss";

const LangingPage = () => {
  return (
    <>
      <Banner />
      <Listings />
      <Listings />
      <Listings />
    </>
  );
};

export default LangingPage;
