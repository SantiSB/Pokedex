import { SET_POKEMONS } from "../actions/types";
import { SET_LOADING } from "../actions/types";
import { SET_SEARCH } from "../actions/types";
import { SET_FAVORITE } from "../actions/types";

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
    case SET_FAVORITE:
      const newPokemonList = [...state.pokemons];
      const currentPokemonIndex = newPokemonList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex < 0) {
        return state;
      }

      newPokemonList[currentPokemonIndex].favorite =
        !newPokemonList[currentPokemonIndex].favorite;

      return {
        ...state,
        pokemons: newPokemonList,
      };

    default:
      return state;
  }
};
