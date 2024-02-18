import { useEffect,useState } from "react";
import { WOW_MOMO,MEGHANA_FOODS,CHICAGO_PIZZA,BAKINGO,ANDHRA_GUNPOWDER,ASHA_TIFFINS,MUMBAI_TIFFIN,MANI_DUM_BIRYANI ,BIG_BOWL } from "../utils/itemsData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESIMG_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    const [resMenu,setResMenu]=useState(null);
    const {resid} = useParams();
    console.log('params',resid);
    useEffect(()=>{
        fetchMenuData();
    },[])

    const fetchMenuData =async ()=>{
        console.log('res',resid)
        switch(resid)
        {
            case '244004' : {
                         setResMenu(WOW_MOMO); 
                         break;
                        }
            
            case '654809' :{
                            setResMenu(MEGHANA_FOODS);
                            break;
                            }
           
            case '279024' :{
                                setResMenu(ANDHRA_GUNPOWDER);
                                    break;
                                    }
             case '201224' :{
                                setResMenu(ASHA_TIFFINS);
                                        break;
                                        }
           case '171768' :{
                            setResMenu(MUMBAI_TIFFIN);
                                            break;
                                            }
            case '194610' :{
                                setResMenu(MANI_DUM_BIRYANI);
                                      break;
                                }
            case '376713' :{
                            setResMenu(BIG_BOWL);
                                  break;
                            }
             default : setResMenu(WOW_MOMO)
        }

        console.log('res after switch',resMenu);
    }
    console.log(resMenu);
    if(resMenu==null)
    return <Shimmer/>
     const {name,cuisines,costForTwoMessage} = resMenu.data.cards[0].card.card.info;
     
        const cards = resMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1]?.card.card.itemCards;
        const cards1=resMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]?.card.card.itemCards;
    
   
     console.log('cards',cards);
    return (
        <div>
            <h1 className="restaurant-name">{name}</h1>
            <h2 className="cuisines">{cuisines.join(', ')}</h2>
            <h2 className="cost-for-two">Cost for Two : {costForTwoMessage}</h2>
            <h1 className="res-menu">Menu</h1>
            <div className="items-list">
               {
                    cards.map((card)=>{
                       return (
                        <div className="item-list" key={card.card.info.id}>
                            <img src={RESIMG_URL+card.card.info.imageId} className="item-img"/>
                            <li>{card.card.info.name} : {card.card.info.price/100}</li>
                            <p>{card.card.info.description}</p>
                          
                           
                        </div>
                       )
                    })
                }
              

            </div>
        </div>
    )
}

export default RestaurantMenu;