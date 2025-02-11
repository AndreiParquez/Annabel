import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
import { FaSquareMinus } from "react-icons/fa6";

const Cart = () => {
  const { cart, updateQuantity } = useContext(CartContext);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl text-center text-zinc-800 font-bold mb-6">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">₱{item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => updateQuantity(item.id, -1)} 
                  className="text-zinc-400 text-2xl"
                >
                  <FaSquareMinus />
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)} 
                  className="text-zinc-600 text-3xl"
                >
                  <MdAddBox />
                </button>
              </div>
              <p className="ml-4 text-lg font-semibold">₱{item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 text-right">
        <Link to="/checkout">
          <button 
            disabled={cart.length === 0} 
            className="px-6 py-2 bg-yellow-900 font-semibold pop text-white rounded-lg disabled:opacity-50"
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
