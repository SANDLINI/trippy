import React from "react";
import "./Hero.css";
import { Box, Button, Typography } from "@mui/material";

export const Hero = ({ image, title, text, btnText, cName }) => {
  return (
    <>
      <Box
        className={cName}
        sx={{
          height: { xs: "260px", sm: "450px", md: "600px" },
          mt: { xs: -4, md: -10 },
        }}
      >
        <img src={image} alt="image" />

        <Box className="content">
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "40px", md: "55px" },
              fontWeight: { xs: 700 },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "22px", md: "30px" },
              fontWeight: { xs: 700 },
            }}
          >
            {text}
          </Typography>
          
        </Box>
      </Box>
    </>
  );
};
