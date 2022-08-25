import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PokemonCard = ({pokemon}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        height="300"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {pokemon.name.toUpperCase()}
        </Typography>
        <Typography>
          Experience: {pokemon.base_experience}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/pokemon">
          Datails
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
