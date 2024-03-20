import { fireEvent, render,screen, waitFor } from "@testing-library/react"
import Body from "../Body"
import { act } from "react-dom/test-utils";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";


// global.fetch= jest.fn(()=>{
//     return Promise.resolve({   - This resolves to something like await response which returns a readable stream object which should again be resolved by using Promise.resolve to 
  // json : return Promise.resolve('data')   get json object
//     } 
// })
// })

it("Should load Search input and Search button in Body componnet", async ()=>{
    
    await act(async ()=>{
      return  render(
        <BrowserRouter>
         <Body/>
         </BrowserRouter>
     )
    })
 
    
    //   jest.useFakeTimers();
  
    
    // const fakeItem= screen.getAllByTestId("fakeItems");
    // expect(fakeItem[0]).toBeInTheDocument();


    // act(() => {
    //   jest.runAllTimers();
    // });

   const searchInput=screen.getByTestId("searchRestaurant");
    expect(searchInput).toBeInTheDocument();
  //  jest.useRealTimers();

 
 

    const searchBtn= screen.getByRole('button',{name : "Search"});
    expect(searchBtn).toBeInTheDocument();

  
 
})

it('Should filter based on the input added in the search box',async ()=>{

      await act(()=>{
        render(
          <BrowserRouter>
          <Provider store={appStore}>
          <Body/>
          </Provider>
          </BrowserRouter>
         )
       });

     const searchInput= screen.getByTestId("searchRestaurant");
       
      fireEvent.change(searchInput , {target : {value : "Meghana"}});

      const searchBtn= screen.getByRole('button',{name : "Search"});
      fireEvent.click(searchBtn);
      const RestaurantList = screen.getAllByTestId("restaurantList");
      console.log('restaurant list',RestaurantList);
      expect(RestaurantList.length).toBe(1);


})
  




