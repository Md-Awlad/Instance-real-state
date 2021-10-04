import { useEffect, useState } from "react";
const useLoadCourse =()=>{
    const [courses, setCourse] = useState();
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return [courses]
}
export default useLoadCourse