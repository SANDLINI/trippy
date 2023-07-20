import React from "react";
import styles from "./Trip.module.css";
import { Box, Typography } from "@mui/material";
import { TripData } from "./TripData";
import image1 from "../../assets/5.jpg";
import image2 from "../../assets/8.jpg";
import image3 from "../../assets/6.jpg";
export const Trip = () => {
  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center", my: { xs: 5, sm: 9, md: 10 } }}>
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "30px", md: "40px" },
              fontWeight: "600",
            }}
          >
            Recent Trips
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "15px", sm: "20px" }, color: "gray" }}
          >
            You can discover unique destinations using Google Maps
          </Typography>
        </Box>
        <Box className={styles.tripData}>
          <TripData
            image={image1}
            heading="Trip in Indeonesia"
            text="Indonesia, officially the Republic of Indonesia, is a country in SouthEast Asia and Oceania between the India and Pacific Ocean. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi and parts of Borneo and New Guinea. "
          />
          <TripData
            image={image2}
            heading="Trip in Malaysia"
            text="Malaysia is a SouthEast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It is known for its branches, rainforest and mix of Malay, Chinese, Indian and European cultural. It has the world's largest cave chamber  "
          />
          <TripData
            image={image3}
            heading="Trip in France"
            text="France, in Western Europe, encompasses medieval cities, alpine villages and Meditterranian beaches. Paris, it's capital, is famed for it's fashion houses, classical art museums including the Louvire and monuments like the Eiffel Tower "
          />
        </Box>
      </Box>
    </>
  );
};
