import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TiArrowBackOutline } from "react-icons/ti";
import { BiSolidCartAlt } from "react-icons/bi";


const products = [
  { id: 1, name: "White Tee", price: 90, category: "Tees", image: "/images/clothes/white1.jpg", description: "This is a white tee", discount: 80 },
  { id: 2, name: "White Tee", price: 90, category: "Tees", image: "/images/clothes/white2.jpg", description: "This is a white tee", discount: 80 },
  { id: 3, name: "White Tee", price: 90, category: "Tees", image: "/images/clothes/white3.jpg", description: "This is a white tee", discount: 80 },
  { id: 4, name: "White Tee", price: 150, category: "Tees", image: "/images/clothes/white4.jpg", description: "This is a white tee", discount: 130 },
  { id: 5, name: "Hoodie", price: 350, category: "Hoodies", image: "/images/clothes/hoodie1.jpg", description: "This is a hoodie", discount: 300 },
  { id: 6, name: "Hoodie", price: 350, category: "Hoodies", image: "/images/clothes/hoodie2.jpg", description: "This is a hoodie", discount: 300 },
  { id: 7, name: "Hoodie", price: 350, category: "Hoodies", image: "/images/clothes/hoodie3.jpg", description: "This is a hoodie", discount: 300 },
  { id: 8, name: "Short", price: 350, category: "Shorts", image: "/images/clothes/short1.jpg", description: "This is a short", discount: 300 },
  { id: 9, name: "Short", price: 350, category: "Shorts", image: "/images/clothes/short2.jpg", description: "This is a short", discount: 300 },
  { id: 10, name: "Short", price: 350, category: "Shorts", image: "/images/clothes/short3.jpg", description: "This is a short", discount: 300 },
  { id: 11, name: "Short", price: 350, category: "Shorts", image: "/images/clothes/short4.jpg", description: "This is a short", discount: 300 },
  { id: 12, name: "Short", price: 350, category: "Shorts", image: "/images/clothes/short5.jpg", description: "This is a short", discount: 300 },
  { id: 13, name: "Dress", price: 350, category: "Dresses", image: "/images/clothes/dress1.jpg", description: "This is a dress", discount: 300 },
  { id: 14, name: "Dress", price: 350, category: "Dresses", image: "/images/clothes/dress2.jpg", description: "This is a dress", discount: 300 },
  { id: 15, name: "Dress", price: 350, category: "Dresses", image: "/images/clothes/dress3.jpg", description: "This is a dress", discount: 300 },
  { id: 16, name: "Dress", price: 350, category: "Dresses", image: "/images/clothes/dress4.jpg", description: "This is a dress", discount: 300 },
  { id: 17, name: "Nightwear", price: 350, category: "Nightwear", image: "/images/clothes/sleep1.jpg", description: "This is a nightwear", discount: 300 },
  { id: 18, name: "Nightwear", price: 350, category: "Nightwear", image: "/images/clothes/sleep2.jpg", description: "This is a nightwear", discount: 300 },
  { id: 19, name: "Nightwear", price: 350, category: "Nightwear", image: "/images/clothes/sleep3.jpg", description: "This is a nightwear", discount: 300 },
  { id: 20, name: "Nightwear", price: 350, category: "Nightwear", image: "/images/clothes/sleep4.jpg", description: "This is a nightwear", discount: 300 },

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
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
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
          className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <BiSolidCartAlt className="mr-2 text-2xl font-bold" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;