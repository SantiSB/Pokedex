import { SET_POKEMONS } from "../actions/types";
import { SET_LOADING } from "../actions/types";
import { SET_SEARCH } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
  search: "",
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
