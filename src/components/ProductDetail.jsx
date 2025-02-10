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