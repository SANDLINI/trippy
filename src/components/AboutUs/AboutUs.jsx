import { Box, Typography } from "@mui/material";
import React from "react";

export const AboutUs = () => {
  return (
    <>
      <Box sx={{ width: "80%", m: "auto", pt: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Our History
        </Typography>
        <Typography sx={{ pb: 5 }}>
          Trippy is owned and managed by Trippy.in Pvt. Ltd, a leading branch in
          providing best tourist packages across the globe. Our invincible
          expertise and rich experience has raised our spirit to reach ahead
          from our customer's expectations.Established in 2000, Trippy has since
          positioned itself as one of the leading companies, providing great
          offers, competitive airfares, exclusive discounts, and a seamless
          online booking experience to many of its customers. The experience of
          booking your flight tickets, hotel stay, and holiday package through
          our desktop site or mobile app can be done with complete ease and no
          hassles at all
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Our Mission
        </Typography>
        <Typography sx={{ pb: 5 }}>
          Our mission is to touch the horizon where our capabilities may
          successfully meet with the requirements of our clients, that too with
          ultimate transparency and cost-effectiveness. Our quest is to manage
          business travel and fulfill vacation dreams through our commitment to
          personalized, world-class service. As members of the Trippy.pvt Ltd
          management team, we provide the highest level of travel management in
          the industry.
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Our Vision
        </Typography>
        <Typography sx={{ pb: 5 }}>
          Our vision is to sow the seed of par-excellence services with the
          customer centric approach and reap the trust of worldwide clients. We
          operate openly and foster transparency. Our team members, clients and
          communities always know where they stand.
        </Typography>
      </Box>
    </>
  );
};
