import { fireEvent, render ,screen} from "@testing-library/react"
import { act } from "react-dom/test-utils";
import React from "react";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import RestaurantMenuCategory from "../RestaurantMenuCategory";
import McokResMenu from './mocks/MockResMenu.json';

import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";


it('should load Recommended menu items in the menu list',async ()=>{
    await act(()=>{
        render(
        <Provider store={appStore}>
           
            <RestaurantMenuCategory menuData={McokResMenu}/>
        </Provider>)
    })

    const recommended = screen.getByText("Recommended (18)");
    expect(recommended).toBeInTheDocument();
    //fireEvent.click(recommended);
    // const addBtn= screen.getByText("Golden Baby Corn");
    // expect(addBtn).toBeInTheDocument();
   
})