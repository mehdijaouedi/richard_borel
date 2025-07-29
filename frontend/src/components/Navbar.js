import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoIcon from "@mui/icons-material/Info";
import SellIcon from "@mui/icons-material/Sell";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const navLinks = [
    { text: "Présentation", to: "/", icon: <InfoIcon /> },
    { text: "Mr Richard Borel", to: "/rodolphe-meyer", icon: <PersonIcon /> },
    { text: "Comment Vendre", to: "/comment-vendre", icon: <SellIcon /> },
    { text: "Beautés du Monde", to: "/products", icon: <ShoppingBagIcon /> },
    { text: "Contact", to: "/contact", icon: <EmailIcon /> },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(59, 130, 246, 0.08)",
          borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1,
          }}
        >
          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src="/logo.jpeg"
              alt="Logo"
              sx={{
                height: 100,
                width: 90,
                borderRadius: "30%",
                border: "3px solid #3b82f6",
                objectFit: "cover",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 25px rgba(59, 130, 246, 0.4)",
                },
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1e40af",
                fontFamily: "Playfair Display",
                letterSpacing: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              {/* Add a title if needed */}
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.slice(0, 4).map(({ text, to }) => (
              <Button
                key={text}
                component={Link}
                to={to}
                variant="outlined"
                sx={{
                  color: "#1e40af",
                  borderColor: "#3b82f6",
                  backgroundColor: "#f1f5f9",
                  borderRadius: "30px",
                  textTransform: "none",
                  px: 2,
                  fontWeight: "500",
                  "&:hover": {
                    bgcolor: "#e2e8f0",
                    borderColor: "#1e3a8a",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
                  },
                }}
              >
                {text}
              </Button>
            ))}
            <Button
              component={Link}
              to="/contact"
              startIcon={<EmailIcon />}
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                color: "white",
                borderRadius: "30px",
                textTransform: "none",
                px: 3,
                fontWeight: "600",
                boxShadow: "0 4px 15px rgba(30, 64, 175, 0.3)",
                "&:hover": { 
                  background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 25px rgba(30, 64, 175, 0.4)",
                },
              }}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{ 
              display: { xs: "block", md: "none" },
              color: "#1e40af",
              "&:hover": {
                bgcolor: "#f1f5f9",
                transform: "scale(1.1)",
              }
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
      <Box
      sx={{
        width: 300, // was 250 — increased width
        background: "#ffffff",
        height: "100%",
        px: 2, // padding for inner spacing
        mt:16,
        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.08)",
        borderRight: "1px solid rgba(59, 130, 246, 0.1)",
      }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      {navLinks.map(({ text, to }) => (
        <ListItem key={text} disablePadding>
          <ListItemButton component={Link} to={to}>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: "1rem",
                fontFamily: "Playfair Display",
                color: "#1e40af",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>

    </>
  );
};

export default Navbar;
