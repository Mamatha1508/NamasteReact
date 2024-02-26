import { useEffect, useState } from "react";
import { WOW_MOMO, MEGHANA_FOODS, CHICAGO_PIZZA, BAKINGO, ANDHRA_GUNPOWDER, ASHA_TIFFINS, MUMBAI_TIFFIN, MANI_DUM_BIRYANI, BIG_BOWL } from "../utils/itemsData";

const useRestaurantMenu = (resid) => {
  const [resMenu, setResMenu] = useState(null);
  const [resDetails,setResDetails] = useState(null)
  console.log(resMenu);

  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = () => {
    switch (resid) {
      case "244004": {
        console.log('wow',WOW_MOMO.data.cards[0].card.card.info);
        let list = WOW_MOMO.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        let listOfItems = list.filter((resMenu) => {
          return resMenu.card.card["@type"].includes("ItemCategory") && !resMenu.card.card["@type"].includes("NestedItemCategory");
        });
        setResMenu(listOfItems);
       setResDetails(WOW_MOMO.data.cards[0].card.card.info)

        break;
      }

      case "654809": {
        let list = MEGHANA_FOODS.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        let listOfItems = list.filter((resMenu) => {
          return resMenu.card.card["@type"].includes("ItemCategory") && !resMenu.card.card["@type"].includes("NestedItemCategory");
        });
        setResMenu(listOfItems);
        setResDetails(MEGHANA_FOODS.data.cards[0].card.card.info)
        break;
      }

      case "279024": {
        let list = ANDHRA_GUNPOWDER.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        let listOfItems = list.filter((resMenu) => {
          return resMenu.card.card["@type"].includes("ItemCategory") && !resMenu.card.card["@type"].includes("NestedItemCategory");
        });
        setResMenu(listOfItems);
        setResDetails(ANDHRA_GUNPOWDER.data.cards[0].card.card.info)
        break;
      }
      case "201224": {
        let list = ASHA_TIFFINS.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        let listOfItems = list.filter((resMenu) => {
          return resMenu.card.card["@type"].includes("ItemCategory") && !resMenu.card.card["@type"].includes("NestedItemCategory");
        });
        setResMenu(listOfItems);
        setResDetails(ASHA_TIFFINS.data.cards[0].card.card.info)
        break;
      }
      case "171768": {
        let list = MUMBAI_TIFFIN.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        let listOfItems = list.filter((resMenu) => {
          return resMenu.card.card["@type"].includes("ItemCategory") && !resMenu.card.card["@type"].includes("NestedItemCategory");
        });
        setResMenu(listOfItems);
        setResDetails(MUMBAI_TIFFIN.data.cards[0].card.card.info)
        break;
      }
      case "194610": {
        let list = MANI_DUM_BIRYANI.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        let listOfItems = list.filter((resMenu) => {
          return resMenu.card.card["@type"].includes("ItemCategory") && !resMenu.card.card["@type"].includes("NestedItemCategory");
        });
        setResMenu(listOfItems);
        setResDetails(MANI_DUM_BIRYANI.data.cards[0].card.card.info)
        break;
      }
      case "376713": {
        let list = BIG_BOWL.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        let listOfItems = list.filter((resMenu) => {
          return resMenu.card.card["@type"].includes("ItemCategory") && !resMenu.card.card["@type"].includes("NestedItemCategory");
        });
        setResMenu(listOfItems);
        setResDetails(BIG_BOWL.data.cards[0].card.card.info)
        break;
      }
      default: {
        let list = WOW_MOMO.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        let listOfItems = list.filter((resMenu) => {
          return resMenu.card.card["@type"].includes("ItemCategory") && !resMenu.card.card["@type"].includes("NestedItemCategory");
        });
        setResMenu(listOfItems);
        setResDetails(WOW_MOMO.data.cards[0].card.card.info)
      }
    }
  };

  return [resMenu,resDetails];
};

export default useRestaurantMenu;
