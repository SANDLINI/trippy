import { Toolbar, AppBar, Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkActive = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <>
      <AppBar
        className={styles.appBar}
        sx={{
          background: "transparent",
          border: "none",
          boxShadow: "none",
          mt: 4,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Toolbar className={styles.toolBar}>
          <Box>
            <NavLink className={styles.navLinks} to={"/"}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Trippy
              </Typography>
            </NavLink>
          </Box>
          <Box className={styles.navLinkBox}>
            <NavLink style={navLinkActive} className={styles.navLinks} to={"/"}>
              Home
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navLinks}
              to={"/About"}
            >
              About
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navLinks}
              to={"/Services"}
            >
              Services
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navLinks}
              to={"/Contact"}
            >
              Contact Us
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navLinks}
              to={"/Contact"}
            >
             
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
