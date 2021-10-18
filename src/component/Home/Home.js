import React from 'react';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Service from './Service/Service';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Doctors/>
            <Testimonial/>
        </div>
    );
};

export default Home;