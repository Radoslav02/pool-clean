// Redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  productId: string;
  name: string;
  image: string;
  size: string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const loadCartFromLocalStorage = (): CartItem[] => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(), 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      saveCartToLocalStorage(state.items); 
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.productId !== action.payload);
      saveCartToLocalStorage(state.items); 
    },
    clearCart(state) {
      state.items = [];
      saveCartToLocalStorage(state.items); 
    },
  },
});

const saveCartToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
