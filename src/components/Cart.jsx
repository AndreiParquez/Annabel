import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₱{item.price}</td>
                <td>{item.quantity}</td>
                <td>₱{item.price * item.quantity}</td>
                <td>
                  <button onClick={() => updateQuantity(item.id, 1)}>➕</button>
                  <button onClick={() => updateQuantity(item.id, -1)}>➖</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <br />
      <Link to="/checkout">
        <button disabled={cart.length === 0}>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
