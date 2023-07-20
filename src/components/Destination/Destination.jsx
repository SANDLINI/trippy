import { Typography, Box } from "@mui/material";
import React from "react";
import { DestinationData } from "./DestinationData";
import mountain1 from "../../assets/1.jpg";
import mountain2 from "../../assets/2.jpg";
import mountain3 from "../../assets/batangas.jpg";
import mountain4 from "../../assets/4.jpg";
import mountain5 from "../../assets/machu1.jpeg";
import mountain6 from "../../assets/machu2.jpeg";

export const Destination = () => {
  return (
    <>
      <Box sx={{ width: { md: "90%" }, margin: "auto" }}>
        <Box sx={{ textAlign: "center", p: "10px" }}>
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "40px" },
              fontWeight: "700",
              mt: { md: 4 },
            }}
          >
            Popular Destination
          </Typography>
          <Typography sx={{ color: "gray" }}>
            Tours give you the opportunity to see a lot, within a time frame
          </Typography>
        </Box>
        <DestinationData
          heading="Taal volcano, Luzon"
          text="One of the iconic views in Luzon, Mt. Taal boasts a volcano inside
              a island. If you fancy a closer look, the hike up to the crater is
              a mere 45 minutes, and is easy enough for begineers. Guides will
              assist you most of the way, and you'll see the peculiar
              environment found on an active volcano, including volcanic rocks
              and steam vents. The hike can be dusty and hot, so plan for an
              early morning trip, and then unwind with some bulalo before
              heading back home!"
          image1={mountain1}
          image2={mountain2}
        />

        <DestinationData
          heading="Mt. Daguldul, Batangas"
          text="If you are looking for a hike that's a little more challenging but still a good for a begineer mountaineer, check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing well-deserved swim "
          image1={mountain3}
          image2={mountain4}
        />

        <DestinationData
          heading="Machu Picchu, Peru"
          text="Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites. On Peru’s arid Pacific coast is Lima, the capital, with a preserved colonial center and important collections of pre-Columbian art."
          image1={mountain5}
          image2={mountain6}
        />
      </Box>
    </>
  );
};
