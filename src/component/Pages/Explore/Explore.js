import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCart from '../../Shared/ProductCard/ProductCart';

const Explore = () => {
    const {product} = useProducts();
    return (
         <div className='section-container'>
            <div className="container">
                <h1 className='section-title'>Explore Propertys</h1>
                {!product.length && <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </div>}
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-1 g-4">
                {
                    product?.map(item=> <ProductCart key={item._id} values={item}></ProductCart>)
                }
            </div>
            </div>
        </div>
    );
};

export default Explore;