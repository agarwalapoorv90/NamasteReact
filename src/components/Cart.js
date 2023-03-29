import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-blue-300" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => {
          return (
            <div className="w-56 p-2 m-2 shadow-lg bg-yellow-300">
              <h2 className="font-bold text-xl">{item.dish}</h2>
              <h4>{item.category}</h4>
              <h4>{item.price}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
