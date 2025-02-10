import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { CartContext } from "../context/CartContext"; // ✅ Import CartContext
import { useNavigate } from "react-router-dom"; // ✅ For redirection

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext); // ✅ Make sure clearCart is correctly accessed
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ Navigation after checkout

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!name || !address) {
      setError("Please enter your name and address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "orders"), {
        customerName: name,
        customerAddress: address,
        items: cart,
        total: total,
        timestamp: new Date(),
      });

      alert("Order placed successfully!");
      clearCart();  // ✅ Reset cart after checkout
      navigate("/"); // ✅ Redirect to home page
    } catch (error) {
      console.error("Error placing order:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>

        <div>
          <label>Address:</label>
          <textarea 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <h3>Total: ₱{total}</h3>
        <button onClick={handleCheckout} disabled={loading}>
          {loading ? "Processing..." : "Confirm Order"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
