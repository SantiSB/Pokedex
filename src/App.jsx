import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { getPokemon } from "./api";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Details from "./Components/Details";
import ComparisonTableLayout from "./Components/ComparisonTableLayout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F60000",
    },
  },
});

function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {

      dispatch(setLoading(true));

      const pokemonsRes = await getPokemon();
      
      await dispatch(getPokemonsWithDetails(pokemonsRes));
      await dispatch(setLoading(false));

    };
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/pokemon/:id" element={<Details />} />
              <Route path="/compare" element={<ComparisonTableLayout pokemons={pokemons}/>} />
              <Route path="/pokedex" element={<Home pokemons={pokemons} loading={loading}/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
