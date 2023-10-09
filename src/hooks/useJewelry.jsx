import { useEffect, useState } from "react";

const useJewelry=()=>{
    const [jewelry,setJewelry]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/jewelry')
        .then(res=>res.json())
        .then(data=>{
            setJewelry(data);
            setLoading(false);
        })
    },[])
    return [jewelry,loading];

}
export default useJewelry;