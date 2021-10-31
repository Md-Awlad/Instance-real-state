import React from 'react';
import { useHistory, useParams } from 'react-router';
import useRooms from '../../../hooks/useRooms';
import { useForm } from "react-hook-form";
import './PlaceOrder.css'
import useAuth from '../../../hooks/useAuth';

const PlaceOrer = () => {
    const {id} =useParams();
    const history = useHistory();
    const {rooms} = useRooms();
    const seletedroom = rooms.find(item=>item._id === id);
    // get user 
    const {user} = useAuth();
    const { register, handleSubmit, watch, formState: {} } = useForm();
    const onSubmit = data => {
        data.img = seletedroom?.img;
        data.description = seletedroom?.description
        data.uid = user?.uid
        fetch('https://evening-shelf-32402.herokuapp.com/orders',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            history.push(`/my-order`)
            console.log(data)}
            )

    }; 

     return (
        <div className='place-Order'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img src={seletedroom?.img} alt="" />
                    <h1>{seletedroom?.name}</h1>
                    <p>{seletedroom?.description}</p>
                    </div>
                    <div className="col-md-6 col-12">
                   <div className="place-order-form">
                   {seletedroom?.name &&  <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' defaultValue={user?.displayName} {...register("name")} />
                <input type='email' defaultValue={user?.email} {...register("email")} />
                <input type='text' defaultValue={seletedroom?.name} {...register("item")} />
                <textarea placeholder="Enter you Address" {...register("address")} />
                <button className='btn button-use' type="submit">Place Order</button>
                </form>}
                   </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrer;