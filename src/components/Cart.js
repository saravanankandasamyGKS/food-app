import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Cart</h1>

      <div className="w-full md:w-6/12 mx-auto bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Items</h2>
          {cartItems.length > 0 && (
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <h2 className="text-center text-gray-500">
            Cart is empty. Add items to the cart!
          </h2>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
