import React from 'react';
import './OrderCard.css'
const OrderCard = (props) => {
    const {img,item,price,_id} = props.values;
    const deleteOrder=(id)=>{
      const sureDelete =  window.confirm("Do you really want to Cancel?");
      if(sureDelete){
        fetch(`http://localhost:5000/my-order/${id}`,{
        method: 'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount){
          window.location.reload();
        }
      })
    }
      }
    return (
       <div className="col">
           <div className="card order-card text-center">
  <div className="card-body">
      <img src={img} width='100%' className='card-image-top' alt="" />
    <h3 className="card-title mt-3">{item}</h3>
    <p className="card-text">Price: <b>${price}</b></p>
    <button onClick={()=>deleteOrder(_id)} className="btn btn-danger">Cancel Order</button>
  </div>
</div>
       </div>
    );
};

export default OrderCard;