import React, {useEffect, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Details from "./Components/Details";
import { getPokemon } from "./api";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F60000",
    },
  },
});

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes)
    };
    fetchPokemons();
  }, []);

  

  return (
    <div style={{ overflow: "hidden"}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home pokemons={pokemons}/>} />
            <Route path="/pokemon" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
