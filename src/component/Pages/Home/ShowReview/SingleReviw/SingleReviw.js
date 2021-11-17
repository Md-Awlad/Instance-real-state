import React from 'react';
import Rating from 'react-rating';
import './SingleReviw.css'
const SingleReviw = (props) => {
    const {rates,reviews} =props.values
    return (
        <div class="card text-center">
        <div class="card-body">
        <Rating
         emptySymbol="far fa-star"
         fullSymbol="fas fa-star"
       
            initialRating={rates}
            readonly
            />
          <p class="card-text">{reviews}</p>
        </div>
      </div>
    );
};

export default SingleReviw;