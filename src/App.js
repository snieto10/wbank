import React from "react";
import NavBar from "./components/navBar";
import Banner from "./components/banner";
import Cards from "./components/cards";
import SearchBar from "./components/searchBar";
import Hero from "./components/hero";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import "./normalize.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Cards />
      <SearchBar />
      <Hero />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
