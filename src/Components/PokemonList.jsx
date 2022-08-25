import React from 'react'
import Grid from "@mui/material/Grid";
import PokemonCard from "./PokemonCard";

const PokemonList = ({pokemons}) => {
  return (
    <Grid container spacing={4}>
          {pokemons.map((pokemon) => (
            <Grid item key={pokemon.name} xs={12} sm={6} md={4} >
              <PokemonCard pokemon={pokemon}/>
            </Grid>
          ))}
        </Grid>
  )
}

export default PokemonList