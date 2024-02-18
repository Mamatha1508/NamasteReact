import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>
{
   const [btnLogin,setBtnLogin]= useState("Logout");
   console.log('Hedaer render');
    return (
        <div className="header">
          <Link to='/'><img src={LOGO_URL} className="logo"/></Link>  
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
              <Link to='/logout'> <button className="login" onClick={()=>{
                    btnLogin=='Login' ? setBtnLogin("Logout") : setBtnLogin('Login')
                }}>{btnLogin}</button></Link>  
            </ul>
        </div>
    )
}


export default Header;