import React from 'react';
import Banner from './Banner/Banner';
import Reviews from './Reviews/Reviews';
import Rooms from './Rooms/Rooms';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Rooms></Rooms>
           <Service></Service>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;