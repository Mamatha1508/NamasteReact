import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";


const Body=()=>{

    const [ListOfRestaurants,setListOfRestaurants]= useState([]);

    const [searchText,setSearchText] = useState('');

   // const [buttonClick,setButtonClick]= useState(false);

    const [filteredList,setFilteredList] = useState([]);
   


  console.log('body render');
    useEffect(()=>{
        setTimeout( 
            fetchData,2000)
    
    },[])

    const fetchData= async ()=>{
       
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
               //   setButtonClick(true);
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
                        filteredList.map(restaurant=>(<Link to={'/restaurant/'+restaurant.info.id} key={restaurant.info.id}><RestaurantCard key={restaurant.info.name} resData={restaurant} /></Link>))
                    }
                    
                </div>
            </div>
            
    
    
        </div>
    )
}



export default Body;