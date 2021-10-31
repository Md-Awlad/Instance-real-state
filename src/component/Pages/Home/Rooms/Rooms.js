import React, { useEffect, useState } from 'react';
import useRooms from '../../../../hooks/useRooms';
import Room from './Room/Room';
import './Rooms.css'

const Rooms = () => {
   const {rooms}= useRooms();
    console.log(rooms)
    return (
        <div>
             <div className='rooms-home'>
            <div className="container">
                <h2 className='section-title'>ROOMS & SUITS</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                   rooms.map(item=><Room key={item._id} values={item}></Room>) 
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Rooms;