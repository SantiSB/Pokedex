import axios from 'axios'

export const getPokemon = () => {
  return (
    axios.get(process.env.REACT_APP_POKEAPI)
    .then((res) => res.data.results)
    .catch((err) => console.log(err))
  )
}

export const getPokemonDetails = (pokemon) => {
  return (
    axios.get(pokemon.url)
    .then(res => res.data)
    .catch((err) => console.log(err))
  )
}