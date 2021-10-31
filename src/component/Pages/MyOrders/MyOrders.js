import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useOrders from '../../../hooks/useOrder';
import Orders from '../../Shared/Orders';

const MyOrders = () => {
    const {user} = useAuth();
    const {order} = useOrders();
    const myorder = order?.filter(item=>user.uid === item.uid);
    console.log(myorder)
    return (
        <div className='manage-order'>
            <div className="container">
                <h1 className='section-title'>My Orders</h1>
                {myorder.length ? "" : "Not data found"}
           {
             myorder?.map(item=><Orders values={item}></Orders>)  
           }
        </div>
        </div>
    );
};

export default MyOrders;