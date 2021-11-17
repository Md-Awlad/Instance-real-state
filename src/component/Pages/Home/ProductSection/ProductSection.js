import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCart from '../../../Shared/ProductCard/ProductCart';
import './ProductSection.css'
const ProductSection = () => {
    const {product} = useProducts();
    const result = product?.slice(0,6);
    console.log(result);

    return (
        <div className='section-container'>
            <div className="container">
                <h1 className='section-title'>Recent Properties</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-1 g-4">
                {
                    result?.map(item=> <ProductCart key={item._id} values={item}></ProductCart>)
                }
            </div>
            </div>
        </div>
    );
};

export default ProductSection;