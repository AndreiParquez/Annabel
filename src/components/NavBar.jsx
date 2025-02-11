import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { TbShoppingBag } from "react-icons/tb";
import { PiBellBold } from "react-icons/pi";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu state

  // Calculate total quantity of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.jpg"
            alt="MyShop"
            className="h-16 w-16 shadow-lg rounded-full"
          />
          <div>
            <p className="text-zinc-700 text-xl font-bold">Annabell's Closet</p>
            <p className="text-zinc-400 text-sm">Ang Ukay-ukay ni Inday</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-zinc-700 hover:text-blue-500 font-semibold">Home</Link>
          <Link to="/shop" className="text-zinc-700 hover:text-blue-500 font-semibold">Shop</Link>
          <Link to="/contact" className="text-zinc-700 hover:text-blue-500 font-semibold">Contact Me</Link>

          {/* Icons */}
          <div className="relative flex space-x-4">
            <PiBellBold className="shadow-md text-zinc-700 p-2 rounded-full text-4xl cursor-pointer" />
            <Link to="/cart" className="relative">
              <TbShoppingBag className="shadow-md p-2 rounded-full text-4xl text-zinc-700 cursor-pointer" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl text-zinc-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg mt-2 space-y-4 py-4">
          <Link to="/" className="text-zinc-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="text-zinc-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/contact" className="text-zinc-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact Me</Link>

          <div className="relative flex space-x-4">
            <PiBellBold className="shadow-md text-zinc-700 p-2 rounded-full text-3xl cursor-pointer" />
            <Link to="/cart" className="relative" onClick={() => setIsOpen(false)}>
              <TbShoppingBag className="shadow-md p-2 rounded-full text-3xl text-zinc-700 cursor-pointer" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
