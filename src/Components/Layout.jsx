import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';


const Layout = ({ children }) => {
  return (
    <React.Fragment>
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
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Pokemon trainer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Go Catch ’Em All!!
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
