import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Trip } from "../../components/Trip/Trip";
import image from "../../assets/hamburg.jpg";
import { Footer } from "../../components/Footer/Footer";
import { PageTabs } from "../../components/NavbarInMobile/PageTabs";

export const Services = () => {
  return (
    <>
      <Navbar />
      <Hero cName="main" image={image} title="Our Services" />
      <Trip />
      <PageTabs />
      <Footer />
    </>
  );
};
