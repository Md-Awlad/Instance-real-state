import React, { useState } from 'react';
import Rating from 'react-rating';
import './UserReview.css'
const UserReview = () => {
    const [rate,setRate]=useState();
    const [review, setRtext] = useState('');
    const getReviwText=(e)=>{
        const rText = e.target.value
        setRtext(rText)
    }
    const handleSubmitReviw=(e)=>{
        const ratings = {rates: rate,reviews: review}
        fetch('https://stormy-citadel-14201.herokuapp.com/review',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(ratings)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                    alert("Review added");
            }
        })
     e.preventDefault();
    }
    return (
        <div className='section-container text-center user-rating'>
            <div className="container">
                <h1 className='section-title'>Give Us Your Review</h1>
                <form onSubmit={handleSubmitReviw}>
               <div className='user-rate'>
               <Rating
                 emptySymbol='far fa-star'
                 fullSymbol='fas fa-star'
                 onChange={(value)=>setRate(value)}
                 />
               </div>
              
               <textarea onBlur={getReviwText} placeholder="What's your experience"></textarea>
               <br/>
              <button className='my-button'>Submit</button>
               </form>

            </div>
        </div>
    );
};

export default UserReview;