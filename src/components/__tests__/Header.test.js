import { fireEvent, render , screen } from "@testing-library/react"
import Header from "../Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import "@testing-library/jest-dom";


it('should load Header Component with Logout Button',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider></BrowserRouter>
        
   );

   const logoutBtn= screen.getByRole("button",{name : "Logout"});
   expect(logoutBtn).toBeInTheDocument();
    fireEvent.click(logoutBtn);
    const loginBtn= screen.getByRole("button",{name: "Login"});
    expect(loginBtn).toBeInTheDocument();
})

it('Should load Status of Header Component as Online',()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>);

    const onlineStatus= screen.getByText("You are Online ✅");
    expect(onlineStatus).toBeInTheDocument();
})