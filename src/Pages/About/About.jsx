import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import image from "../../assets/night.jpg";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import {Footer} from '../../components/Footer/Footer'
import { PageTabs } from "../../components/Tabs/PageTabs";
export const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="aboutHero"
        image={image}
        title="Curious to Know About Us ?"
        text=""
        btnText="Travel Plan"
      />
      <AboutUs/>
      <Footer/>
      <PageTabs/>
    
    </>
  );
};
