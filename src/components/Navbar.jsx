import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
console.log(location.pathname)
  return (
    <Box sx={{ flexGrow: 1, marginLeft: "auto", marginRight: "auto" }}>
      <AppBar  sx={{
          minHeight: '55px',
          height: "55px",
          borderRadius: "12px",
          mt: 2,
        }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Link
            color="inherit"
            underline="none"
            sx={{ flexGrow: 1, fontFamily: "Poppins" }}
            href="/"
          >
            Mammus
          </Link>
          {location.pathname !== '/' && <Box
            sx={{ flexGrow: 1, display: "flex", gap: 4, fontFamily: "Poppins" }}
          >
            <Link
              href="/items"
              color={location.pathname === "/items" ? "secondary" : "inherit"}
              underline={location.pathname === "/items" ? "always" : "none"}
            >
              Items
            </Link>
            <Link
              href="/category"
              color={
                location.pathname === "/category" ? "secondary" : "inherit"
              }
              underline={location.pathname === "/category" ? "always" : "none"}
            >
              Category
            </Link>
          </Box>}
          <Avatar sx={{width: 25, height: 25}} src="/broken-image.jpg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
