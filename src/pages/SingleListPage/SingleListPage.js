import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ListingInfo from "../../components/ListingInfo/ListingInfo";
import ActiveBidsPage from "../ActiveBidsPage/ActiveBidsPage";
import "./SingleListPage.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";

const SingleListPage = () => {
  const [singleList, setSingleList] = useState(null);
  const [bidPrice, setBidPrice] = useState(null);
  const { id } = useParams();
  const [value, setValue] = React.useState("1");
  const [listingSaved, setListingSaved] = React.useState(false);

  const currentBid = (price) => {
    setBidPrice(price);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    axios
      .get(`https://housebidy-api.netlify.app/listings/${id}`)
      .then((response) => {
        const data = response.data;

        setSingleList(data);
      })
      .catch((err) => {
        console.log("Couldnt fetch a recipe", err);
      });
  }, [id]);

  if (!singleList) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main">
      <header className="main__header">
        {singleList.Media.length === 0 ? (
          <img
            alt="Listing Realtor"
            className="main__image"
            src={
              singleList.Property.Photo[0].HighResPath
                ? singleList.Property.Photo[0].HighResPath
                : "https://cache15.housesigma.com/file/pix-itso/132335821/d1a10_1.jpg?46ba9d69"
            }
          />
        ) : (
          <iframe
            title="property"
            className="main__image"
            src={singleList.AlternateURL.VideoLink}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </header>
      <div className="list">
        <section className="list__options">
          <Link to={"/"}>
            <ArrowBackIcon />
          </Link>
          <Button onClick={() => setListingSaved(!listingSaved)}>
            {listingSaved ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
          </Button>
        </section>

        <section className="list__section">
          <div className="list__contact-panel">
            <Avatar
              alt="Remy Sharp"
              src={
                singleList.Individual[0].PhotoHighRes
                  ? singleList.Individual[0].PhotoHighRes
                  : ""
              }
              sx={{ width: 200, height: 200 }}
            />
            <div className="">
              <h3>{singleList.Individual[0].Name}</h3>
              <p>{singleList.Individual[0].Organization.Name}</p>
              <p>Contact: {singleList.Individual[0].Emails[0].ContactId}</p>
            </div>
          </div>
          <div className="list__tab-section">
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Listing Info" value="1" />
                  <Tab label="Active Bids" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ListingInfo
                  bid={currentBid}
                  id={singleList.Id}
                  mlsNumber={singleList.MlsNumber}
                  address={singleList.Property.Address.AddressText}
                  price={singleList.Property.Price}
                  type={singleList.Property.Type}
                  ownershipType={singleList.Property.OwnershipType}
                  parking={singleList.Property.ParkingSpaceTotal}
                  parkingType={
                    singleList.Property.Parking
                      ? singleList.Property.Parking[0].Name
                      : "None"
                  }
                  bathroom={singleList.Building.BathroomTotal}
                  bedroom={singleList.Building.Bedrooms}
                  size={singleList.Land.SizeTotal}
                  remark={singleList.PublicRemarks}
                />
              </TabPanel>
              <TabPanel value="2" className="list__tab-panel">
                <ActiveBidsPage
                  bidPrice={bidPrice ? bidPrice : "No Actives yet"}
                />
              </TabPanel>
            </TabContext>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SingleListPage;
