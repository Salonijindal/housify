import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { db } from "../../firebase";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

import "./ListingInfo.scss";

const ListingInfo = (props) => {
  const [values, setValue] = useState("");
  const [placedBid, setPlacedBid] = useState(false);
  const {
    bid,
    id,
    mlsNumber,
    parkingType,
    address,
    price,
    type,
    ownershipType,
    parking,
    bathroom,
    bedroom,
    size,
    remark,
  } = props;
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    bid(values);
    setPlacedBid(true);
    try {
      const docData = {
        bid: values,
      };
      await setDoc(doc(db, "data", "listing"), docData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "data", "one");
      const docSnap = await getDoc(docRef);
      console.log(docSnap);
    }
    fetchData();
  }, []);

  const parkingInfo = parking ? parking : 0;
  return (
    <div className="list-info">
      <h1>{address}</h1>
      <h2 className="list-info__subtitle">{`${bedroom} Bed, ${bathroom} bath, ${parkingInfo} parking`}</h2>
      <p className="list-info__description">{remark}</p>
      <div>
        <div className="list-info__item">
          <h3>Price</h3>
          <h3>{price}</h3>
        </div>
        <div className="list-info__item">
          <h3>Size</h3>
          <h3>{size}</h3>
        </div>
        <div className="list-info__item">
          <h3>Type</h3>
          <h3>{type}</h3>
        </div>
        <div className="list-info__item">
          <h3>Parking Type</h3>
          <h3>{parkingType ? parkingType : "None"}</h3>
        </div>
        <div className="list-info__item">
          <h3>Ownership Type</h3>
          <h3>{ownershipType}</h3>
        </div>
      </div>

      <form className="list-info__form" onSubmit={handleSubmit}>
        <FormControl className="list-info__input-form">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            disabled={placedBid}
            value={values}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            placeholder="Enter Amount"
          />
        </FormControl>
        <Button variant="contained" type="submit" disabled={placedBid}>
          Place Bid
        </Button>
      </form>
      {placedBid && <label>Your Bid has been placed: ${values}</label>}
    </div>
  );
};

export default ListingInfo;
