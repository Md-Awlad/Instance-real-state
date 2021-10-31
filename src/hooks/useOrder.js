import { useEffect, useState } from "react"

const useOrders =()=>{
    const [order,setOrder] = useState([])
    useEffect(()=>{
        fetch('https://evening-shelf-32402.herokuapp.com/orders')
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