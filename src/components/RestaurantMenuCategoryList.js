
const RestaurantMenuCategoryList=(props)=>{

    // console.log('props in res menu cat list',props);
  
   
console.log('props in items',props);
//const {name,category,price,description,imageId}=props.menuList.card.info;
    return (
        <div>
            {
       props.data.map((item)=>{
        return (
            <div className=" my-2 flex justify-between border-gray-400 border-b-2">
            <div className="text-left w-9/12">
                <div className="text-lg">
                <span> {item.card.info.name}</span></div>
                <div>
             <span> Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
            
             <p className="text-xs">{item.card.info.description}</p>
           
 
             </div>
             <div>
             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId} className="h-24 m-2 " />
             </div> 
            
         </div>
        )
       })
            }
        </div>
    
      
             
            
      
        
       
    )
}

export default RestaurantMenuCategoryList;