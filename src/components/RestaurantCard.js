
import { useContext } from "react";
import { RESIMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import React from "react";

const RestaurantCard=(props)=> {
   // console.log('props in res',props);
    const {name,cuisines,avgRating,sla,cloudinaryImageId,promoted}=props.resData.info;   // destructuring
     const styleprop={
        backgroundColor : "white",
        
     }
      
     
        return (
     
            <div className="cursor-pointer" >
              
                <img  className="w-72 h-52 rounded-lg m-4" src={RESIMG_URL+cloudinaryImageId} ></img>
                <h1 className="mx-4">{name}</h1>
                <h3 className="mx-4">{cuisines.join(', ')}</h3>
                <h4 className="mx-4">{avgRating}</h4>
                <h4 className="mx-4">{sla.slaString}</h4>
               
            </div>
        )

     }
     
export const PromotedRestaurant=(RestaurantCard)=>{
    return (props)=>{
        
        
            return (
                <div>
                    <label className="absolute p-1 m-1 bg-black text-white">Promoted</label>
                    <RestaurantCard {...props}/>
                </div>
            )
        
       
    
        
    
    }
}
 

 export default RestaurantCard;