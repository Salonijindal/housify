import React from "react";
import "./Listings.scss";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <button className="slide-arrow next-arrow" onClick={onClick}></button>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <button className="slide-arrow prev-arrow" onClick={onClick}></button>;
}

const Listings = () => {
  const cities = [
    "New York",
    "Nashville",
    "Tokyo",
    "Moscow",
    "San Francisco",
    "Houston",
    "Boston",
    "Toronto",
  ];

  const settings = {
    arrows: true,
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    centreMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  return (
    <section className="listings">
      <h1>Explore Listings</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "90%", background: "white" }}>
          <Slider {...settings} className="listings__item">
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
