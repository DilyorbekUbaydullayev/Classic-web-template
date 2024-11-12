import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavbarBox, NavbarButton, NavbarTitle, NavbarTitle2 } from "./styled";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [color, setColor] = useState(() => {
    const savedIndex = localStorage.getItem("selectedPage");
    return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
  });
  
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (page, i) => {
    setColor(i);
    localStorage.setItem("selectedPage", i);
    handleCloseNavMenu();
    navigate(page.path);
  };

  return (
    <AppBar position="static" color="">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ p: 1.2 }}>
          <NavbarTitle variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu">
            Classic
          </NavbarTitle>
          <NavbarTitle2 variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu">
            Classic
          </NavbarTitle2>
          <NavbarBox>
            <Box sx={{ display: "flex", gap: 2 }}>
              {pages.map((page, index) => (
                <NavbarButton
                  rang={color}
                  index={index}
                  key={page.name}
                  onClick={() => handleClick(page, index)}
                >
                  {page.name}
                </NavbarButton>
              ))}
            </Box>
          </NavbarBox>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.path);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
