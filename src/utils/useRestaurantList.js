import { useState,useEffect } from "react";
import resList from "./mockData";

const useRestaurantList=()=>{

    const [ListOfRestaurants,setListOfRestaurants]=useState(0);
    const [filteredList,setFilteredList]=useState(0);
    useEffect(()=>{
        setTimeout( 
            fetchData,2000)
    
    },[])

    const fetchData= async ()=>{
       
        const res= resList;
        setListOfRestaurants(res);
        setFilteredList(res);
    }
    return [ListOfRestaurants,filteredList];

}

export default useRestaurantList;