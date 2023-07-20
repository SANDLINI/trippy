import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Services } from "./Pages/Services/Services";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"/Services"} element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
