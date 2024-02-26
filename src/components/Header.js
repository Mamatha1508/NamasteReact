import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>
{
   const [btnLogin,setBtnLogin]= useState("Logout");

   const onlineStatus=useOnlineStatus();
//    let status=''
//    if(onlineStatus==true)
//    status='online'
//     else
//     status='offline'
   console.log('Hedaer render');
    return (
        <div className="flex justify-between shadow-2xl bg-pink-50">
          <Link to='/'><img src={LOGO_URL} className="w-32 p-4"/></Link>  
            <ul className="flex p-4 m-4">
                <li className="m-4">{onlineStatus ? 'You are Online ✅' : 'You are offline ⛔'}</li>
                <li className="m-4"><Link to='/instamart'>Instamart </Link></li>
                <li className="m-4"><Link to='/'>Home</Link></li>
                <li className="m-4"><Link to='/about'>About us</Link></li>
                <li className="m-4"><Link to='/contact'>Contact us</Link></li>
                <li className="m-4"><Link to='/cart'>Cart</Link></li>
              <Link to='/logout'> <button className="m-4" onClick={()=>{
                    btnLogin=='Login' ? setBtnLogin("Logout") : setBtnLogin('Login')
                }}>{btnLogin}</button></Link>  
            </ul>
        </div>
    )
}


export default Header;