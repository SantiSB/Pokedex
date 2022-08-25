import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const Layout = ({ children }) => {
  return (
    <div >
      {/* Appbar */}
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Link color="inherit" href="/" underline="none">
              Pokedex
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Main */}
      {children}
    </div>
  );
};

export default Layout;
