import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESIMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import { useState } from "react";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();
  console.log("params", resid);

  const [resMenu, resDetails] = useRestaurantMenu(resid);
  const [showDetails,setShowDetails]=useState(null);
  

  if (resMenu == null) return <Shimmer />;

//  const  handleClick=()=>
//   {
//     setShowDetails(!showDetails);

//   }
  
  return (
    <div>
      <div className=" my-8 font-bold text-2xl text-center ">
        <h1 className="m-4"> {resDetails.name}</h1>
        <h1 className="m-4">
          {resDetails.cuisines.join(", ")} - Rs. {resDetails.costForTwo / 100} for Two
        </h1>
      </div>
      <div>
        {resMenu.map((menu,index) => {
        
           return (
        //     <div>
        //     <div  className="w-6/12 my-4 mx-auto py-8 text-center bg-pink-50 shadow-2xl shadow-stone-900 border-gray-200 border-b-2 " >
        //       <div className="flex justify-between cursor-pointer" onClick={(e)=>{ setShowDetails(!showDetails); e.stopPropagation();}}>
        //         <h1 className="m-2 px-4 font-bold"  >
        //           {menu.card.card.title} ({menu.card.card.itemCards.length})
        //         </h1>
        //         <span className="mx-4">🔽</span></div>
               
                
               
               
        //       {showDetails &&  <RestaurantMenuCategory menuData={menu} />}
           
             
        // </div>
             
        //     </div>
        // <RestaurantMenu menuData={menu}/>
       <div>

        <RestaurantMenuCategory  menuData={menu} showDetails={showDetails==index ? true : false }    setShowDetails={()=>setShowDetails(index)}/>
       </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
