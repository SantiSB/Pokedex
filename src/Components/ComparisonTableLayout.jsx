import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ComparisonTable from "./ComparisonTable";
import Button from "@mui/material/Button";

function ComparisonTableLayout() {
  return (
    <Box sx={{ overflowY: "hidden", height: "100vh" }}>
      <Container sx={{ padding: 10,  }}>
        <h1 style={{ textAlign: "center" }}>Which is better?</h1>
        <ComparisonTable></ComparisonTable>
      </Container>
    </Box>
  );
}

export default ComparisonTableLayout;
