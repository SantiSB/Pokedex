import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import pokeball from "../Utils/pokeball.ico";

function Details() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={false} sm={4} md={6}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`}
          alt="random"
          style={{ width: "100%", height: "80%", padding: "5rem" }}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
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
            {`bulbasur`.toUpperCase()}
          </Typography>
          <Typography component="p" variant="p">
            Experience: 64
          </Typography>
          <Typography component="p" variant="p">
            Height: 7
          </Typography>
          <Typography component="p" variant="p">
            Weight: 69
          </Typography>
          <Typography component="p" variant="p">
            Abilities: overgrow, chlorophyll
          </Typography>
          <Typography component="p" variant="p">
            Moves: razor-wind, swords-dance, cut
          </Typography>
          <Typography component="p" variant="p">
            Location: cerulean-city-area, pallet-town-area, lumiose-city-area
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
    </Grid>
  );
}

export default Details;
