import { configureStore } from '@reduxjs/toolkit';
import PokemonSlice from './PokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: PokemonSlice,
  },
});