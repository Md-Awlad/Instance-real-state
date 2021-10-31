import { useEffect, useState } from "react"

const useOrders =()=>{
    const [order,setOrder] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
    .then(res=>res.json())
    .then(data=>{
        setOrder(data)
    })
    },[])
    return {
        setOrder,
        order
    }
}
export default useOrders;