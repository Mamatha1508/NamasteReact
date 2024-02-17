
import { RESIMG_URL } from "../utils/constants";

const RestaurantCard=(props)=> {
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=props.resData.info;   // destructuring
     const styleprop={
        backgroundColor : "white"
     }
     
     
     return (
     
     <div className="res-card" style={styleprop}>
         <img src={RESIMG_URL+cloudinaryImageId} className="res-item-img"></img>
         <h1>{name}</h1>
         <h3>{cuisines.join(', ')}</h3>
         <h4>{avgRating}</h4>
         <h4>{sla.slaString}</h4>
     </div>
 )
 }

 export default RestaurantCard;