import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

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

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedProducts, setLikedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(products.map(product => product.category))];

  const toggleLike = (productId) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.includes(productId)
        ? prevLikedProducts.filter(id => id !== productId)
        : [...prevLikedProducts, productId]
    );
  };

  // Filtered products based on category and search
  const filteredProducts = products.filter(product => 
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-zinc-800">
            Welcome to <span className="text-yellow-800">Annabell’s Closet</span>, Your Online <span className="text-yellow-500">Ukay-Ukay</span> Haven!
          </h1>
          <p className="text-gray-700 mb-4 font-semibold">
            Love affordable fashion? Annabell’s Closet brings you the best ukay-ukay finds vintage, trendy, and budget-friendly!
          </p>
        </div>
        <img src="/images/brand.png" alt="Banner" className="w-full md:w-1/2 rounded-lg" />
      </div>

      {/* Search Bar */}
      <div className="relative mb-8  flex items-center justify-center mx-auto">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-700 font-extrabold text-lg" />
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full outline-none ring-2 ring-yellow-500 shadow-md"
        />
      </div>

      {/* Category Filter Tabs */}
      <div className="overflow-x-auto flex space-x-4 mb-4 pb-2 scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap px-4 py-1 font-semibold rounded-2xl text-sm transition-colors duration-300 ${selectedCategory === category ? 'bg-zinc-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="relative bg-zinc-100 rounded-lg p-2 cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <Link to={`/product/${product.id}`} className="no-underline text-inherit">
                <div>
                  <img src={product.image} alt={product.name} className="size-36 object-cover rounded-lg mx-auto mb-2" />
                  <button
                    className={`absolute top-4 right-4 text-base text-center bg-white p-1 rounded-full ${likedProducts.includes(product.id) ? 'text-red-500' : 'text-gray-300'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLike(product.id);
                    }}
                  >
                    <FaHeart />
                  </button>
                  <h3 className="font-semibold text-center">{product.name}</h3>
                  <p className="text-gray-700 text-sm text-center">{product.description}</p>
                  <p className="text-yellow-900 text-sm font-bold text-center">
                    ₱{product.discount} <span className="line-through font-semibold text-red-400">₱{product.price}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;