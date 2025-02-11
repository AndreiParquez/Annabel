import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar";
import ContactMe from "./components/Contact";
import "./style.css"; // Import the styles

function App() {
  return (
    <Router>  {/* ✅ Move Router to wrap everything */}
      <NavBar />  {/* ✅ Place NavBar inside Router */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
