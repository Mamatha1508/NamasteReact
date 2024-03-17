
import { CART_IMG } from "../utils/constants";
import {  useDispatch, useSelector } from "react-redux";
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList";
import { clearCart } from "../redux/cartSlice";

const Cart=()=>{
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <div>
           
            {
                cartItems.length==0 ? (
                    <div>

            <img src={CART_IMG} className="align-middle left-96"></img>
            <h1>
                OOPS, your card is empty !!
            </h1>
                    </div>

                ) : (
                    <div className="text-center m-6 p-6">
                    <button className="border-spacing-2 mb-6 bg-pink-100 p-4" onClick={handleClearCart}>
                        Clear Cart
                    </button>
            
                    <div className="w-6/12 m-auto p-10 bg-pink-50 rounded-lg">
                        {
                            <RestaurantMenuCategoryList data={cartItems}/>
                        }
                    </div>
                    </div>
                )
            }
            
        </div>
    )
}

export default Cart;