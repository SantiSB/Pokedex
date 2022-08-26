import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import pokeball from "../Utils/pokeball.ico";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

function Details() {
  const { id } = useParams();

  const pokemon = useSelector((state) => state.pokemons).find(
    (pokemon) => pokemon.id === parseInt(id)
  );

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {pokemon ? (
        <>
          <Grid item xs={false} sm={4} md={6}>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt="random"
              style={{ width: "100%", height: "80%", padding: "5rem" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={pokeball}
                style={{ alignSelf: "center" }}
                sx={{ width: 100, height: 100 }}
              />
              <Typography
                component="h1"
                variant="h1"
                align="center"
                style={{ marginBottom: "1rem" }}
              >
                {pokemon.name.toUpperCase()}
              </Typography>
              <Typography component="p" variant="p">
                Experience: {pokemon.base_experience}
              </Typography>
              <Typography component="p" variant="p">
                Height: {pokemon.height}
              </Typography>
              <Typography component="p" variant="p">
                Weight: {pokemon.weight}
              </Typography>
              <Typography component="p" variant="p">
                Abilities:{" "}
                {pokemon.abilities.map((ability) => {
                  return <li>{ability.ability.name}</li>;
                })}
              </Typography>
              <Typography component="p" variant="p">
                Moves:{" "}
                {pokemon.moves.map((move) => {
                  return move.move.name;
                })}
              </Typography>
              <Typography component="p" variant="p">
                Location: cerulean-city-area, pallet-town-area,
                lumiose-city-area
              </Typography>

              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add to Favorites
                </Button>
                <Button type="submit" fullWidth variant="outlined" href="/">
                  Go back
                </Button>
              </Box>
            </Box>
          </Grid>
        </>
      ) : (
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
}

export default Details;
