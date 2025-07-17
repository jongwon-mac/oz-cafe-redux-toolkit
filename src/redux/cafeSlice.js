import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [
    // 예시 메뉴 데이터
    { id: 1, name: '아메리카노', price: 4000, category: '커피' },
    { id: 2, name: '카페라떼', price: 4500, category: '커피' },
    { id: 3, name: '딸기 스무디', price: 5000, category: '음료' },
  ],
  cart: []
};

const cafeSlice = createSlice({
  name: 'cafe',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const exist = state.cart.find(cartItem => cartItem.id === item.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const item = state.cart.find(cartItem => cartItem.id === id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const item = state.cart.find(cartItem => cartItem.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
    }
  }
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cafeSlice.actions;
export default cafeSlice.reducer;