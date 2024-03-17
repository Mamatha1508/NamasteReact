import { useState } from "react";
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList";




const RestaurantMenuCategory=(props)=>{
   
   
console.log('props in cat',props);

const [showitemStatus,setShowItemStatus]=useState(false);
const handleClick=()=>{
    props.setShowDetails();
    setShowItemStatus(!showitemStatus);
}
console.log('on click',showitemStatus);
    return (
       

        <div>
            <div className="w-6/12 mx-auto my-4 p-4 text-center bg-pink-50 shadow-2xl border-gray-200 border-b-2 cursor-pointer">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold ">{props.menuData.card.card.title}</span>
                <span>🔽</span>
                </div>
               
             {props.showDetails && showitemStatus && <RestaurantMenuCategoryList data={props.menuData.card.card.itemCards}/> }
               
            </div>
        </div>
    )
    
   
    

}

export default RestaurantMenuCategory;