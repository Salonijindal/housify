import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./ActiveBidsPage.scss";

const ActiveBidsPage = ({ bidPrice }) => {
  const [bid, setBid] = useState([]);
  let data = { name: "Sudeep Jindal", price: "260,000" };
  console.log(bid);

  useEffect(() => {
    if (bidPrice !== "No Actives yet") {
      let updatedValue = {
        name: localStorage.getItem("username"),
        price: `${bidPrice}`,
      };
      setBid([data, updatedValue]);
    } else {
      setBid([data]);
    }
  }, []);

  return (
    <div className="bid">
      <List className="bid__list">
        {bid &&
          bid.map((singleValue) => {
            return (
              <>
                <ListItem className="bid__item">
                  <ListItemAvatar>
                    <Avatar
                      alt={singleValue.name}
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText primary={singleValue.name} />
                  <ListItemText
                    primary={`$${singleValue.price}`}
                    sx={{ textAlign: "right" }}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
      </List>
    </div>
  );
};

export default ActiveBidsPage;
