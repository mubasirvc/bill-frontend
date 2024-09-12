import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      sx={{ mt: { xs: 5, sm: 8, md: 13, lg: 18 } }}
      // bgcolor="#f0f0f0"
    >
      <Typography
        variant="h2"
        component="div"
        color="#444"
        px={5}
        sx={{
          textAlign: "center",
          mb: 3,
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
        }}
      >
        Effortless Bill Management at Your Fingertips
      </Typography>
      <Typography
        variant="h6"
        component="div"
        color="primary"
        sx={{
          textAlign: "center",
          mb: 2,
          fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
        }}
      >
        Say goodbye to paper clutter and hello to seamless bill creation. Our
        intuitive app lets you generate, track, and manage your bills with ease.
        Whether you’re a business owner or just handling personal expenses,
        streamline your financial workflow and stay on top of your bills
        effortlessly. Start creating and managing your bills today!
      </Typography>
      <Link to="/items">
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px", fontSize: { xs: "0.75rem", sm: "1rem" } }}
        >
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
