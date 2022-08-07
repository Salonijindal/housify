import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import "./ListingInfo.scss";

const ListingInfo = (props) => {
  const [values, setValue] = useState("");
  const {
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
      <form className="list-info__form">
        <FormControl className="list-info__input-form">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values}
            onChange={(e) => setValue(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <Button variant="contained">Place Bid</Button>
      </form>
    </div>
  );
};

export default ListingInfo;
