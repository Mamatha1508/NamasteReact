import {Link} from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

const Logout=()=>{
    return (
        <div className='res-logout'>
            <img src={LOGO_URL}/>
            <h2 className="logout">
                You have logged out of App!!
                Click Login to login to the app
            </h2>
           <Link to='/'> <button>Login</button></Link>
        </div>
    )
}

export default Logout;