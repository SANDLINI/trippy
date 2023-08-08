import React from "react";
import { Typography, Grid } from "@mui/material";
import styles from "../Destination/Destination.module.css";

export const DestinationData = ({ heading, text, image1, image2 }) => {
  return (
    <>
      <Grid sx={{ mt: { md: 7 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ px: { md: 8 } }}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "30px", sm: "30px" },
                fontWeight: "600",
                mt: { xs: 5, md: 12 },
              }}
            >
              {heading}
            </Typography>
            <Typography>{text}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} sx={{ mt: { md: 3 } }}>
                  <img src={image1} alt="image" className={styles.img} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img src={image2} alt="image" className={styles.img} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
