import React from 'react';
import './Singleperson.css'

const Singleperson = (props) => {
    const{name,followers,engagement,Liker,cost,img} = props.data;
    return (
        <div className='single-person'>
            <div className="image">
            <img src={img} alt="" />
            </div>
            <div className="card-body">
                <h2 className='name'>@{name}</h2>
                <h2 className="followers"> Followers: {followers}</h2>
                <p>Engagemet: {engagement}</p>
                <p>Average likes: {Liker}</p>
                <h2 className='cost'>Cost: ${cost}</h2>
                <button onClick={()=> props.item(props.data)} className='button'><i className="fas fa-user-plus"></i> Add Person</button>
            </div>
        </div>
    );
};

export default Singleperson;