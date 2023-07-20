import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import image from "../../assets/12.jpg";
import { Destination } from "../../components/Destination/Destination";
import { Trip } from "../../components/Trip/Trip";
import { Footer } from "../../components/Footer/Footer";
import { PageTabs } from "../../components/Tabs/PageTabs";
export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="main"
        image={image}
        title="Your journey your story"
        text="Choose your favourite destination"
        btnText="Travel Plan"
      />
      <Destination />
      <Trip />
      <Footer />
      <PageTabs />
    </>
  );
};
