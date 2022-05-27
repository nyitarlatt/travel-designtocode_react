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
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div id="bg1">
        <Navbar />
        <Home />
      </div>
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
