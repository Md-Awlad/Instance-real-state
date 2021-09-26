import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let total = 0
    // get total cost 
    for(const values of props.value){
        total = !values.cost ? 0 : values.cost + total;
    }
    return (
        // add to cart codes 
        <div className='add-Cart'>
            <h2><i className="fas fa-users"></i> Total Added: {props.value.length}</h2>
            <h1>Total Cost: ${total}</h1>
            {
                props.value.map(item =>
                <div className="show-Cart" key={item.id}> 
                <img src={item.img} alt="" />    
                <h4>{item.name}</h4>
                </div>
                )
            }
        </div>
    );
};

export default Cart;