import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import React from "react";
import style from "./Trip.module.css";

export const TripData = ({ image, heading, text }) => {
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 350, height: "450px", }}>
          <CardMedia
            className={style.image}
            component="img"
            height="140"
            image={image}
          />
          <CardContent>
            <Typography
              sx={{ fontSize: { xs: "22px", sm: "25px" }, fontWeight: "700" }}
            >
              {heading}
            </Typography>
            <Typography>{text}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
