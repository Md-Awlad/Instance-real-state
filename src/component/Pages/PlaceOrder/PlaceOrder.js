import React from 'react';
import { useHistory, useParams } from 'react-router';
import useProducts from '../../hooks/useProducts'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const history = useHistory();
    const { id } = useParams();
    const {product} = useProducts()
    const {user} = useAuth();
    const getSelected = product.find(item =>item._id===id);
    console.log(getSelected);
    const { register, handleSubmit, watch, formState: {} } = useForm();
    const onSubmit = data => {
        data.img=getSelected?.img;
        console.log(data)
        fetch('http://localhost:5000/my-order',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            history.push('/my-order');
        })
    }

    return (
        <div className='place-Order'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={getSelected?.img} alt="" />
                <h1>{getSelected?.name}</h1>
                <p>Price: <b>${getSelected?.price}</b></p>
                <p>{getSelected?.des}</p>
                </div>
                <div className="col-md-6 col-12">
               <div className="place-order-form">
               {getSelected?.name &&  <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' defaultValue={user?.displayName} {...register("name")} />
            <input type='email' defaultValue={user?.email} {...register("email")} />
            <input type='text' defaultValue={getSelected?.name} {...register("item")} />
            <input type='text' defaultValue={getSelected?.price} {...register("price")} />
            <textarea placeholder="Enter you Address" {...register("address")} />
            <button className='my-button' type="submit">Place Order</button>
            </form>}
               </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PlaceOrder;