import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("gcash");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!name || !address || !paymentMethod) {
      setError("Please enter your name, address, and select a payment method.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "orders"), {
        customerName: name,
        customerAddress: address,
        paymentMethod: paymentMethod,
        items: cart,
        total: total,
        timestamp: new Date(),
      });

      setSuccess(true); // Show modal on success
      clearCart();
    } catch (error) {
      console.error("Error placing order:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100 p-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checkout</h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              >
                <option value="gcash">GCash</option>
                <option value="card">Credit/Debit Card</option>
                <option value="cod">Cash on Delivery (COD)</option>
              </select>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <h3 className="text-lg font-semibold text-center">
              Total: <span className="text-green-600">₱{total}</span>
            </h3>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-yellow-800 text-white py-2 font-bold rounded-lg hover:bg-yellow-700 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Confirm Order"}
            </button>
          </form>
        </div>
      )}

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="bg-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-green-600">Order Placed!</h3>
            <p className="text-gray-700 mt-2">Thank you for your order. We will process it soon.</p>
            <button
              onClick={() => {
                setSuccess(false);
                navigate("/");
              }}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
