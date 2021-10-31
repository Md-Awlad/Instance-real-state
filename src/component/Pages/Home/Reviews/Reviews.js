import React from 'react';
import Rating from 'react-rating';
import img1 from '../../../../image/review1.png'
import img2 from '../../../../image/review2.png'
import './Review.css'
const Reviews = () => {
    return (
        <div>
            <div className='testimonials'>
            <div className="container">
            <h2 className='section-title'>Reviews</h2>
            <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            <div className="col">
                <div className="reviews">
                <div className="review-person d-lg-flex align-self-center justify-content-between">
                    <div className="review-name d-flex align-items-center">
                        <img src={img1} alt="" />
                        <h4>David Spinner</h4>
                    </div>
                    <div className="review-rate">
                    <Rating
                     initialRating={4.5}
                     readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />
                    </div>
                </div>
                <div className="review-text"><p>“This hotel is really amazing and the behaviour of the staff of this hotel is also good.I love this hotel 😍”</p></div>
            </div>
            </div>
            <div className="col">
                <div className="reviews">
                <div className="review-person d-lg-flex  align-self-center justify-content-between">
                    <div className="review-name d-flex align-items-center">
                        <img src={img2} alt="" />
                        <h4>Lilly gail</h4>
                    </div>
                    <div className="review-rate">
                    <Rating
                     initialRating={4.1}
                     readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />
                    </div>
                </div>
                <div className="review-text"><p>“This hotel is really amazing and the behaviour of the staff of this hotel is also good.I love this hotel 😍”</p></div>
            </div>
            </div>
            
            
            </div>
            </div>
        </div>
        </div>
    );
};

export default Reviews;