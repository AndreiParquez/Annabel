import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // ✅ Import cart icon
import { CartContext } from "../context/CartContext"; // ✅ Import Cart Context
import { TbShoppingBag } from "react-icons/tb";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { PiBellBold } from "react-icons/pi";


const NavBar = () => {
  const { cart } = useContext(CartContext);

  // Calculate total quantity of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className=" p-4 flex justify-between items-center">
      <Link to="/" className=" flex items-center space-x-2">
        <img src="/images/logo.jpg" alt="MyShop" className="h-18  shadow-lg rounded-full" />
        <div>
            <p className="text-zinc-700 text-xl font-bold">Annabell's closet</p>
            <p className="text-zinc-400 text-sm">Ang Ukay-ukay ni Inday</p>

        </div>
        
      </Link>

      <div className="relative flex">
        <PiBellBold className=" shadow-md text-zinc-700  p-2 rounded-full  text-4xl"/>
        <Link to="/cart" className="text-zinc-700    ">
          <TbShoppingBag className=" shadow-md  p-2 rounded-full  text-4xl"/>
        </Link>
        
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
            {cartItemCount}
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
