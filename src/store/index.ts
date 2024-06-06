import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favorito'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: carrinhoReducer,
    favoritar: favoritarReducer
  },
  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
