import RestaurantCard, { PromotedRestaurant } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  const onlineStatus = useOnlineStatus();
  const PromotedRestaurants= PromotedRestaurant(RestaurantCard);
  let a=9;
  console.log("body render");
  useEffect(() => {
    setTimeout(fetchData, 2000);
  }, []);

  const fetchData = async () => {
    const res = resList;
    setListOfRestaurants(res);
    setFilteredList(res);
  };

  console.log("rest list", ListOfRestaurants);
  if (onlineStatus == false) {
    return <h1>Looks like you are offline. Plesae check your interner connectivity</h1>;
  } else if (ListOfRestaurants.length === 0) {
    
      return  <Shimmer />
      
    
  } else {
    return (
      <div>
        <div className="flex justify-center">
          <input className="my-8 mx-4 p-2 rounded-lg"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value); 
            }}
          />
          <button className="rounded-lg bg-pink-100 w-24 my-8 "
            onClick={() => {
              //   setButtonClick(true);
              const fil = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredList(fil);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex justify-center">
          <button className=" w-48 my-8 p-4 bg-pink-100 rounded-lg"
            onClick={() => {
              const filteredTopRatedList = filteredList.filter((restaurant) => restaurant.info.avgRating > 4.1);
                   console.log('filtered top',filteredTopRatedList);
                    
              setFilteredList(filteredTopRatedList);
             
            
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <div className="flex justify-evenly flex-wrap">
            {
              
           filteredList.map((restaurant) => (
              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="h-156 w-80 bg-pink-50 rounded-2xl m-4 shadow-2xl shadow-stone-900 cursor-pointer">
             { restaurant.info.promoted ? <PromotedRestaurants key={restaurant.info.name} resData={restaurant}/> : <RestaurantCard key={restaurant.info.name} resData={restaurant} />}
            
              </Link>
            )) 
              

            }
          </div>
        </div>
      </div>
    );
  }
};

export default Body;
