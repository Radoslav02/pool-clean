import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import searchReducer from './searchSlice';
import cartReducer from './cartSlice'; 


// Configuration for persistence (only for the auth slice)
const authPersistConfig = {
  key: 'auth',
  storage,
};

interface AuthState {
  user: null | object;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Persisted auth reducer
    search: searchReducer,       // Search reducer
    cart: cartReducer,   // Add the cart reducer
    resetAuth: () => initialState,        
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
