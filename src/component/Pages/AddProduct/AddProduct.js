import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddProduct.css'
const AddProduct = () => {
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/products',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert("Service Added successfully");
            history.push('/explore')

        }
    })
    console.log(data)
    };
    return (
        <div className="add-service">
        <div className="container">
            <h1 className='section-title'>Add A Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Item Name' type='text' {...register("name",{ required:true })} />
            <input placeholder='Description' type='text' {...register("des")} />
            <input placeholder='Price' type='text' {...register("price")} />
            <input placeholder='Image' type='text'  {...register("img",{ required:true })} />
            <button className='btn my-button' type="submit">Submit</button>
            </form>
    </div>
    </div>
    );
  
};

export default AddProduct;