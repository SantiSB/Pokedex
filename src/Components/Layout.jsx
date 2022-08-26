import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <React.Fragment >
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Link to={"/"} style={{textDecoration: 'none', color: '#ffffff'}}>
              Pokedex
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      {children}

    </React.Fragment>
  );
};

export default Layout;
