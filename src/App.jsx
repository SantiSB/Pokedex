import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./actions";
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
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      await dispatch(getPokemonsWithDetails(pokemonsRes));
      await dispatch(setLoading(false));
      
    };
    fetchPokemons();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home pokemons={pokemons} loading={loading}/>} />
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
