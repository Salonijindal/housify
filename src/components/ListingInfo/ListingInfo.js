import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import TextField from "@mui/material/TextField";

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
        id,
        mlsNumber,
        bid: values,
        user: localStorage.getItem("user"),
      };
      await setDoc(doc(db, "data", `${id}`), docData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "data", `${id}`);
      const docSnap = await getDoc(docRef);

      if (docSnap._document.data.value.mapValue.fields.id.stringValue === id) {
        setValue(docSnap._document.data.value.mapValue.fields.bid.stringValue);
        setPlacedBid(true);
        bid(values);
      }
    }
    fetchData();
  }, [values]);

  const parkingInfo = parking ? parking : 0;
  return (
    <div className="list-info">
      <h2>{address}</h2>
      <p className="list-info__description">{remark}</p>
      <div className="list-info__list">
        <div className="list-info__item">
          <p>Bedrooms</p>
          <p>{bedroom}</p>
        </div>
        <div className="list-info__item">
          <p>Bathrooms</p>
          <p>{bathroom}</p>
        </div>
        <div className="list-info__item">
          <p>Price</p>
          <p>{price}</p>
        </div>
        <div className="list-info__item">
          <p>Size</p>
          <p>{size}</p>
        </div>
        <div className="list-info__item">
          <p>Type</p>
          <p>{type}</p>
        </div>
        <div className="list-info__item">
          <p>Parkings</p>
          <p>{parkingInfo}</p>
        </div>
        <div className="list-info__item">
          <p>Parking Type</p>
          <p>{parkingType ? parkingType : "None"}</p>
        </div>
        <div className="list-info__item">
          <p>Ownership Type</p>
          <p>{ownershipType}</p>
        </div>
      </div>
      <form className="list-info__form" onSubmit={handleSubmit}>
        <TextField
          className="list-info__input-form"
          id="outlined-number"
          required
          label="Amount"
          type="amount"
          InputLabelProps={{
            shrink: true,
          }}
          value={values}
          onChange={handleChange}
          placeholder="Enter Amount"
          disabled={placedBid}
        />
        <Button
          variant="contained"
          className="list-info__button"
          type="submit"
          disabled={placedBid}
        >
          Place Bid
        </Button>
      </form>
      {placedBid && (
        <label className="list-info__label">
          Your Bid has been placed: ${values}
        </label>
      )}
    </div>
  );
};

export default ListingInfo;
