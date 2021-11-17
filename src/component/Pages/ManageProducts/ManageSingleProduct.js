import React from 'react';

const ManageSingleProduct = (props) => {
    const {name,price,_id} = props.values;
    const deleteProduct=(id)=>{
        const wannaDelete = window.confirm('Do you want to delete Product?');
        if(wannaDelete){
            fetch(`https://stormy-citadel-14201.herokuapp.com/products/${id}`,{
                method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=> {
                    if(data.deletedCount){
                        window.location.reload();

                      }
                })
        }
       
    }
    return (
        <div className='col'> 
                    <div class="card border-primary mb-3 text-center">
        <div class="card-header">Price: ${price}</div>
        <div class="card-body text-primary">
            <h5 class="card-title mb-3">{name}</h5>
            <button onClick={()=>deleteProduct(_id)} className='btn btn-danger'>Delete Product</button>
        </div>
        </div>
        </div>
    );
};

export default ManageSingleProduct;