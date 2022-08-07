import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ListingInfo from "../../components/ListingInfo/ListingInfo";
import "./SingleListPage.scss";

const SingleListPage = () => {
  const [singleList, setSingleList] = useState(null);
  const { id } = useParams();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/listings/${id}`)
      .then((response) => {
        console.log(response.data);
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
    <main className="list">
      <h1> Listing</h1>
      <section className="list__section">
        <div>
          <img
            className="list__image"
            src={
              singleList.Property.Photo[0].HighResPath
                ? singleList.Property.Photo[0].HighResPath
                : "https://cache15.housesigma.com/file/pix-itso/132335821/d1a10_1.jpg?46ba9d69"
            }
          />
          {singleList.Media[0] == "undefined" && (
            <a href={singleList.Media[0].MediaCategoryURL}>
              For more, click here
            </a>
          )}
        </div>
        <div>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ListingInfo
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
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </div>
      </section>
    </main>
  );
};

export default SingleListPage;
