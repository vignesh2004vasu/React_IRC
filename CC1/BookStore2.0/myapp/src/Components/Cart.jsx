import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from './CartSlice';
import NavHome from './NavHome';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
    <NavHome/>
    <div>
      <h1>Cart Items</h1>
      <button onClick={handleClear}>Clear Cart</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {/* Display item details */}
            {item.title} - {item.price}
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Cart;
