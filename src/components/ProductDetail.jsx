import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TiArrowBackOutline } from "react-icons/ti";
import { BiSolidCartAlt } from "react-icons/bi";

const products = [
  { id: 1, name: "Monkey Baloon", price: 95, category: "Tees", image: "/images/clothes/white1.jpg", description: "Just a Monkey chillin'mid-air", discount: 85 },
  { id: 2, name: "Mauko Muna", price: 100, category: "Tees", image: "/images/clothes/white2.jpg", description: "Grafitti art white tee cut-out", discount: 90 },
  { id: 3, name: "Joy Baggy", price: 105, category: "Tees", image: "/images/clothes/white3.jpg", description: "Oversized baggy fit white tee", discount: 95 },
  { id: 4, name: "Art tee White", price: 150, category: "Tees", image: "/images/clothes/white4.jpg", description: "Simple white tee design", discount: 130 },
  { id: 5, name: "Picturesque Hoodie", price: 360, category: "Hoodies", image: "/images/clothes/hoodie1.jpg", description: "Short sleeved blue hoodie ", discount: 320 },
  { id: 6, name: "V-design Hoodie", price: 370, category: "Hoodies", image: "/images/clothes/hoodie2.jpg", description: "Short sleeved brown hoodie", discount: 330 },
  { id: 7, name: "Maroon Hoodie", price: 380, category: "Hoodies", image: "/images/clothes/hoodie3.jpg", description: "House sillhoutte hoodie", discount: 340 },
  { id: 8, name: "Astral Jorts Denim", price: 220, category: "Shorts", image: "/images/clothes/short1.jpg", description: "Grayish jorts with start design", discount: 190 },
  { id: 9, name: "Short Faded Denim", price: 250, category: "Shorts", image: "/images/clothes/short2.jpg", description: "Classic Faded Denim Shorts ", discount: 300 },
  { id: 10, name: "Short Dark Blue Jorts", price: 260, category: "Shorts", image: "/images/clothes/short3.jpg", description: "Denim Shorts in Dark Blue Shade", discount: 210 },
  { id: 11, name: "Fashion Skort", price: 270, category: "Shorts", image: "/images/clothes/short4.jpg", description: "Available in Black and Pink", discount: 230 },
  { id: 12, name: "Fashion Skort (new colors)", price: 290, category: "Shorts", image: "/images/clothes/short5.jpg", description: "Availale in Olive Green and Mustard", discount: 250 },
  { id: 13, name: "Blue Floral Dress", price: 450, category: "Dresses", image: "/images/clothes/dress1.jpg", description: "Silk Dress with flower design", discount: 400 },
  { id: 14, name: "Black Floral Dress", price: 700, category: "Dresses", image: "/images/clothes/dress2.jpg", description: "Elegeant Black floral dress V neck", discount: 650 },
  { id: 15, name: "Casual Blouse", price: 350, category: "Dresses", image: "/images/clothes/dress3.jpg", description: "A blouse for casual occassions", discount: 320 },
  { id: 16, name: "Sunflower Dress", price: 500, category: "Dresses", image: "/images/clothes/dress4.jpg", description: "A simple white dress with sunflowers", discount: 450 }
];


const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl font-bold mt-8">Product not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-yelllow-500 hover:underline mb-4 inline-block">
        <TiArrowBackOutline className="inline mr-2 text-2xl font-bold" /> Back to Products
      </Link>
      <div className="bg-white  rounded-lg p-2 items-center flex flex-col">
       
        <img src={product.image} alt={product.name} className="size-89 object-cover rounded-lg mb-4" />
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-yellow-900 text-xl font-bold mb-4">
          ₱{product.discount} <span className="line-through text-gray-500">₱{product.price}</span>
        </p>
        
        <button 
          onClick={() => addToCart(product)} 
          className="bg-yellow-800 text-white w-full px-4 py-2 font-bold rounded hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
        >
          <BiSolidCartAlt className="mr-2 text-2xl font-bold" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;