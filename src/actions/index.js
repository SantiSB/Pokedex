import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";
import { SET_LOADING } from "./types";
import { SET_SEARCH } from "./types";
import { SET_FAVORITE } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetails));
  };

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
