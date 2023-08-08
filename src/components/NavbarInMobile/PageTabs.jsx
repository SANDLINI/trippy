import React from "react";
import styles from "./PageTabs.module.css";

import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const PageTabs = () => {
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

          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar
          className={styles.toolBar}
          sx={{ position: "fixed", bottom: 10, left: 20, right: 20 }}
        >
          <Box className={styles.navLinkBox}>
            <NavLink className={styles.navLinks} style={navLinkActive} to={"/"}>
              Home
            </NavLink>
            <NavLink
              className={styles.navLinks}
              style={navLinkActive}
              to={"/About"}
            >
              About
            </NavLink>
            <NavLink
              className={styles.navLinks}
              style={navLinkActive}
              to={"/Services"}
            >
              Services
            </NavLink>
            <NavLink
              className={styles.navLinks}
              style={navLinkActive}
              to={"/Contact"}
            >
              Contact
            </NavLink>
            <NavLink
              style={navLinkActive}
              className={styles.navLinks}
              to={"/Contact"}
            ></NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
