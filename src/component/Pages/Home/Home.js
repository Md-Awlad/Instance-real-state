import React from 'react';
import Agents from './Agents/Agents';
import Banner from './Banner/Banner';
import ProductSection from './ProductSection/ProductSection';
import ShowReview from './ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductSection></ProductSection>
            <Agents></Agents>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;