import { useEffect, useState } from "react"

const useServices =()=>{
    const [service, setService] =useState([]);
    const [doctor,setDoctor] = useState([]);

    useEffect(()=>{
        fetch('doctor.json')
        .then(res=> res.json())
        .then(data=> setDoctor(data))
    },[]);

    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data => setService(data))
    },[])
    console.log(service)
    return {
        service,
        doctor
    }
}
export default useServices;