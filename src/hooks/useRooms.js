import { useEffect } from "react";
import { useState } from "react";

const useRooms = ()=>{
    const [rooms, setRoom] = useState([])
    useEffect(()=>{
        fetch('https://evening-shelf-32402.herokuapp.com/rooms')
        .then(res=>res.json())
        .then(data=> setRoom(data))
    },[])
    return {rooms};
}
export default useRooms;