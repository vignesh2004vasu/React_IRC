import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: JSON.parse(localStorage.getItem('cartItems')) || [], // Load items from localStorage
//   },
//   reducers: {
//     addToCart(state, action) {
//       state.items.push(action.payload);
//       localStorage.setItem('cartItems', JSON.stringify(state.items)); // Update localStorage on addition
//     },
//     removeFromCart(state, action) {
//       const index = state.items.findIndex((item) => item.id === action.payload.id);
//       if (index !== -1) {
//         state.items.splice(index, 1);
//         localStorage.setItem('cartItems', JSON.stringify(state.items)); // Update localStorage on removal
//       }
//     },
//     clearCart(state) {
//       state.items = [];
//       localStorage.removeItem('cartItems'); // Clear cart items from localStorage
//     },
//     // Other actions like clear cart, etc., can be added here
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
