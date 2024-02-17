import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>
{
   const [btnLogin,setBtnLogin]= useState("Login");
    return (
        <div className="header">
            <img src={LOGO_URL} className="logo"/>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    btnLogin=='Login' ? setBtnLogin("Logout") : setBtnLogin('Login')
                }}>{btnLogin}</button>
            </ul>
        </div>
    )
}


export default Header;