import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from './Shimmer'

const Body=()=>{

    const [ListOfRestaurants,setListOfRestaurants]= useState([]);

    const [searchText,setSearchText] = useState('');

    const [buttonClick,setButtonClick]= useState(false);

    const [filteredList,setFilteredList] = useState([]);

  console.log('body render');
    useEffect(()=>{
        setTimeout( 
            fetchData,3000)
    
    },[])

    const fetchData= async ()=>{
        // const res1= await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
   
        // const jsonRes= await res1.json();
        // console.log(jsonRes)
        const res= resList;
        setListOfRestaurants(res);
        setFilteredList(res);
    }

    if(ListOfRestaurants.length===0)
    {
        return <Shimmer/>
    }
    return (
        <div className="restaurant">
            <div className="search-bar"> 
                <input type="text"  onChange={(e)=>{
                   
                    setSearchText(e.target.value)

                }}/>
                <button onClick={()=>{
                  
                      const fil= ListOfRestaurants.filter(res=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   
                    setFilteredList(fil);
                }}>Search</button>
            </div>
            <div className="top-res">
                
           <button onClick={()=>{
            const filteredTopRatedList=filteredList.filter(restaurant=> restaurant.info.avgRating>4.1)
          
                if(filteredTopRatedList<ListOfRestaurants)
                 {
                <Shimmer/>
                 }
            
           
            setFilteredList(filteredTopRatedList);
           }}>Top Rated Restaurants</button>
          
            </div>
            <div className="restaurant-cart">
                <div className="Cart-items ">
                    {
                        filteredList.map(restaurant=>(<RestaurantCard key={restaurant.info.name} resData={restaurant} />))
                    }
                    
                </div>
            </div>
            
    
    
        </div>
    )
}



export default Body;