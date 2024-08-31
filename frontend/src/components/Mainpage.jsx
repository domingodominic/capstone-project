import React, { useReducer, useEffect } from "react";
import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";

function Mainpage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}

export default Mainpage;
