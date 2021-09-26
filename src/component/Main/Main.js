import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singleperson from '../SinglePerson/Singleperson';
import './Main.css'
const Main = () => {
    const [influencer,setInfluencer] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./influencer.json')
        .then(res => res.json())
        .then(data=>setInfluencer(data))
    },[])
    // Function for add to cart 
    const handleAddCart = (datas)=>{
        const newData = [...cart,datas];
        setCart(newData);
    }
    return (
        <main>
            <div className="show-influencer">
                {
                    influencer.map(item => <Singleperson 
                        data={item} 
                        key={item.id}
                        item={handleAddCart} 
                    />)
                }
            </div>
            <div className="influencer-Addtocart">
                   <Cart value={cart}></Cart>
            </div>
        </main>
    )
};
export default Main;