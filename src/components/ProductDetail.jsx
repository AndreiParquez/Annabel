import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TiArrowBackOutline } from "react-icons/ti";
import { BiSolidCartAlt } from "react-icons/bi";


const products = [
  { id: 1, name: "Classic White Tee", price: 95, category: "Tees", image: "/images/clothes/white1.jpg", description: "A timeless white tee perfect for any occasion.", discount: 85 },
  { id: 2, name: "Slim Fit White Tee", price: 100, category: "Tees", image: "/images/clothes/white2.jpg", description: "A sleek slim-fit tee for a modern look.", discount: 90 },
  { id: 3, name: "V-Neck White Tee", price: 105, category: "Tees", image: "/images/clothes/white3.jpg", description: "A stylish V-neck tee made from soft cotton.", discount: 95 },
  { id: 4, name: "Oversized White Tee", price: 150, category: "Tees", image: "/images/clothes/white4.jpg", description: "A comfortable oversized tee for a relaxed fit.", discount: 130 },
  { id: 5, name: "Black Pullover Hoodie", price: 360, category: "Hoodies", image: "/images/clothes/hoodie1.jpg", description: "A cozy black hoodie with a warm fleece lining.", discount: 320 },
  { id: 6, name: "Zip-Up Gray Hoodie", price: 370, category: "Hoodies", image: "/images/clothes/hoodie2.jpg", description: "A stylish gray hoodie with a zip-up front.", discount: 330 },
  { id: 7, name: "Navy Blue Hoodie", price: 380, category: "Hoodies", image: "/images/clothes/hoodie3.jpg", description: "A soft and durable navy blue hoodie.", discount: 340 },
  { id: 8, name: "Casual Black Shorts", price: 220, category: "Shorts", image: "/images/clothes/short1.jpg", description: "Comfortable black shorts for everyday wear.", discount: 190 },
  { id: 9, name: "Denim Cutoff Shorts", price: 250, category: "Shorts", image: "/images/clothes/short2.jpg", description: "Trendy denim cutoff shorts for a stylish look.", discount: 200 },
  { id: 10, name: "Athletic Running Shorts", price: 260, category: "Shorts", image: "/images/clothes/short3.jpg", description: "Lightweight running shorts for maximum comfort.", discount: 210 },
  { id: 11, name: "Chino Shorts", price: 270, category: "Shorts", image: "/images/clothes/short4.jpg", description: "Classic chino shorts that pair well with any outfit.", discount: 230 },
  { id: 12, name: "Cargo Utility Shorts", price: 290, category: "Shorts", image: "/images/clothes/short5.jpg", description: "Multi-pocket cargo shorts for a functional style.", discount: 250 },
  { id: 13, name: "Floral Summer Dress", price: 450, category: "Dresses", image: "/images/clothes/dress1.jpg", description: "A beautiful floral dress perfect for summer.", discount: 400 },
  { id: 14, name: "Elegant Evening Gown", price: 700, category: "Dresses", image: "/images/clothes/dress2.jpg", description: "A stunning evening gown for formal occasions.", discount: 650 },
  { id: 15, name: "Casual Shirt Dress", price: 350, category: "Dresses", image: "/images/clothes/dress3.jpg", description: "A stylish yet casual shirt dress for daily wear.", discount: 320 },
  { id: 16, name: "Vintage Polka Dot Dress", price: 500, category: "Dresses", image: "/images/clothes/dress4.jpg", description: "A classic polka dot dress with a vintage feel.", discount: 450 },
  { id: 17, name: "Soft Cotton Pajamas", price: 300, category: "Nightwear", image: "/images/clothes/sleep1.jpg", description: "Breathable and soft cotton pajamas for a good night's sleep.", discount: 270 },
  { id: 18, name: "Silky Nightgown", price: 400, category: "Nightwear", image: "/images/clothes/sleep2.jpg", description: "A luxurious silky nightgown for comfort and elegance.", discount: 350 },
  { id: 19, name: "Cozy Fleece Pajamas", price: 420, category: "Nightwear", image: "/images/clothes/sleep3.jpg", description: "Warm fleece pajamas to keep you cozy at night.", discount: 380 },
  { id: 20, name: "Lace Sleepwear Set", price: 450, category: "Nightwear", image: "/images/clothes/sleep4.jpg", description: "A delicate lace sleepwear set for ultimate comfort.", discount: 400 },
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