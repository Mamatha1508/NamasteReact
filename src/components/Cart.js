import { CART_IMG } from "../utils/constants";

const Cart=()=>{
    return (
        <div className="res-cart">
            <img src={CART_IMG}></img>
            <h1>
                OOPS, your card is empty !!
            </h1>
        </div>
    )
}

export default Cart;