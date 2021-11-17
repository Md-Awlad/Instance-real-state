import React from 'react';
import {useHistory } from 'react-router-dom';
import './ProductCart.css'
const ProductCart = (props) => {
  const history = useHistory()
    const {name,des,img,price,_id}=props.values;
    const handleRediract=(id)=>{
      history.push(`/place-order/${id}`)
    }
    return (
        <div className="col">
        <div className="card order-cards h-100">
          <img src={img} height='230px' className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title card-name">{name}</h5>
            <h5 className='card=price'>${price}</h5>
            <p className="card-text">{des}</p>
            <button onClick={()=>handleRediract(_id)} className='my-button'>Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCart;