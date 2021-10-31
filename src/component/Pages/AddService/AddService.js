import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import './Addservice.css';
const AddService = () => {
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('https://evening-shelf-32402.herokuapp.com/rooms',{
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
            history.push('/home')

        }
    })
    console.log(data)
    };
    return (
        <div className="add-service">
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Item Name' type='text' {...register("name",{ required:true })} />
                <input placeholder='Description' type='text' {...register("description")} />
                <input placeholder='Image' type='text'  {...register("img",{ required:true })} />
                <button className='btn button-use' type="submit">Submit</button>
                </form>
        </div>
        </div>
    );
};

export default AddService;