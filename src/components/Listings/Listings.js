import React, { useEffect, useState } from "react";
import "./Listings.scss";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <button className="slide-arrow next-arrow" onClick={onClick}></button>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <button className="slide-arrow prev-arrow" onClick={onClick}></button>;
}

const Listings = () => {
  const [listing, setListing] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("This will run when component renders");

    axios
      .get("http://localhost:8080/listings")
      .then((response) => {
        const listingData = response.data;
        setListing(listingData);
        setError(false);
      })
      .catch((err) => {
        console.log("Couldnt fetch a listing", err);
        setError(true);
      });
  }, []);

  useEffect(() => {
    console.log("is listing printed out", listing);
  }, [listing]);

  const settings = {
    arrows: true,
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    centreMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  if (error || listing == []) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="listings">
      <h1>Explore Listings</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "90%", background: "white" }}>
          <Slider {...settings} className="listings__item">
            {listing &&
              listing.map((list) => {
                return (
                  <Link key={list.Id} to={`/listing/${list.Id}`}>
                    <div>
                      <Card
                        className="listings__card"
                        key={list.Id}
                        id={list.MlsNumber}
                      >
                        <CardActionArea className="listings__card-container">
                          <CardMedia
                            component="img"
                            height="140"
                            image={
                              list.Property.Photo[0].HighResPath
                                ? list.Property.Photo[0].HighResPath
                                : "https://cache15.housesigma.com/file/pix-itso/132335821/d1a10_1.jpg?46ba9d69"
                            }
                            alt="green iguana"
                            className="listings__card-image"
                          />
                          <Avatar
                            alt="Realtor"
                            className="listings__card-avatar"
                            src={
                              list.Individual[0].Photo
                                ? list.Individual[0].Photo
                                : "https://cdn.realtor.ca/individual/TS637789440000000000/lowres/1135552.jpg"
                            }
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {`Listed: ${list.Property.Price}`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {`${list.Building.Bedrooms}bd ${list.Building.BathroomTotal}ba`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {list.Property.Address.AddressText}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  </Link>
                );
              })}
            <div>
              <Card className="listings__card">
                <CardActionArea className="listings__card-container">
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.realtor.ca/listings/TS637919205850330000/reb16/highres/0/40282670_1.jpg"
                    alt="green iguana"
                    className="listings__card-image"
                  />
                  <Avatar
                    alt="Realtor"
                    className="listings__card-avatar"
                    src="https://cdn.realtor.ca/individual/TS637789440000000000/lowres/1135552.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Listed: $569,000
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      3bd 5ba 1 gr
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      425 BINGEMANS CENTRE DRIVE, Kitchener - Ontario
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Listings;
