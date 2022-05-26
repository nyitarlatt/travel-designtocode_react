import React from "react";

import {
  Navbar,
  Home,
  Booking,
  Brand,
  Category,
  Contact,
  Footer,
  Testimonials,
  TopSelling,
} from "./components";

import "./dist/tailwind.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Category />
      <TopSelling />
      <Booking />
      <Testimonials />
      <Brand />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
