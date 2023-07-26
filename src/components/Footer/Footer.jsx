import React from "react";
import styles from "./Footer.module.css";
import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Box className={styles.footer} sx={{ mb: { xs: 10, sm:0 } }}>
        <Box className={styles.top}>
          <Box>
            <Typography sx={{ fontSize: "35px", fontWeight: "700" }}>
              Trippy
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Choose your favourite destination
            </Typography>
          </Box>
          <Box sx={{ mx: -1 }}>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
        <Box className={styles.bottom}>
          <Box className={styles.footerLinks}>
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              Project
            </Typography>
            <NavLink className={styles.navlinks} to="./">
              ChangeLog
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              Status
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              License
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              All Versions
            </NavLink>
          </Box>

          <Box className={styles.footerLinks}>
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              Community
            </Typography>
            <NavLink className={styles.navlinks} to="./">
              GitHub
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              Issues
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              Project
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              Twitter
            </NavLink>
          </Box>
          <Box className={styles.footerLinks}>
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              Help
            </Typography>
            <NavLink className={styles.navlinks} to="./">
              Support
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              Troubleshooting
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              Contact Us
            </NavLink>
          </Box>
          <Box className={styles.footerLinks}>
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              Others
            </Typography>
            <NavLink className={styles.navlinks} to="./">
              Terms of service
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              Privacy Policy
            </NavLink>
            <NavLink className={styles.navlinks} to="./">
              License
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};
