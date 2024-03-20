import { fireEvent, render ,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import RestaurantCardMockData from './mocks/RestaurantCardMockData.json'
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import Body from "../Body";


it('Should filter restaurants based on filter',()=>{
    render(
      
       <BrowserRouter>
      
       <RestaurantCard resData={RestaurantCardMockData}/></BrowserRouter>
   
   )

//    const searchInput= screen.getByTestId("searchRestaurant");
//    expect(searchInput).toBeInTheDocument();
//    fireEvent.change(searchInput,{target : {value :  "Meghana"}});
//    const searchBtn= screen.getByRole('button',{name:"Search"});
//    fireEvent.click(searchBtn);
   const restaurant= screen.getByText("Wow! Momo");
   expect(restaurant).toBeInTheDocument();
})