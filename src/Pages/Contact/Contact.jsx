import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import image from "../../assets/2.jpg";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Footer } from "../../components/Footer/Footer";
import { PageTabs } from "../../components/NavbarInMobile/PageTabs";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="main"
        image={image}
        title="Contact Us"
        text="Feel Free to Connect"
        btnText="Travel Plan"
      />

      <ContactForm />
      <PageTabs />
      <Footer />
    </>
  );
};
