import React from "react";
import "./style.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <About />
        <Shop />
      </div>
    </BrowserRouter>
  );
}
