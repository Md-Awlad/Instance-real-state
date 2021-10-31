import React from 'react';
import useOrders from '../../../hooks/useOrder';
import Orders from '../../Shared/Orders';
import './ManageOrder.css'

const ManageOrder = () => {
    const {order} = useOrders();
    return (
        <div className='manage-order'>
            <div className="container">
            <h1 className='section-title'>Manage Orders</h1>
            {
                order.map(item=><Orders values={item}></Orders>)
            }
        </div>
        </div>
    );
};

export default ManageOrder;