import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleReviw from "./SingleReviw/SingleReviw";
const ShowReview = () => {
  const [reviws, setReviws] = useState([]);
  useEffect(() => {
    fetch("https://stormy-citadel-14201.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviws(data));
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="section-container show-review-section">
      <div className="container">
        <h1 className="section-title">Review</h1>
        <Carousel responsive={responsive}>
          {reviws.map((item) => (
            <SingleReviw key={item._id} values={item}></SingleReviw>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ShowReview;
