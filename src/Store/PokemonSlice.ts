import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    deck: <any>[],
    openAlert: <boolean>false,
    alertSituation: "",
    searchValue: "",
    results: [],
  },
  reducers: {
    setPokemonDeck(state, action) {
      if (!state.deck.some((obj: any) => obj.name === action.payload.name)) {
        if (state.deck.length === 10) {
          let tempArray = state.deck;
          tempArray.shift();

          state.deck = [...tempArray, action.payload];
        } else {
          state.deck = [...state.deck, action.payload];
        }
        state.alertSituation = "success";
      } else {
        state.alertSituation = "failure";
      }
      state.openAlert = true;
    },
    setCloseAlert(state) {
      state.openAlert = false;
      state.alertSituation = "";
    },
    setPokemonsList(state, action) {
      state.results = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },

  },
});

export const { setPokemonDeck, setCloseAlert, setSearchValue, setPokemonsList } = pokemonSlice.actions;
export default pokemonSlice.reducer;
