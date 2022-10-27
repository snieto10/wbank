import React from "react";
import NavBar from "./components/navBar";
import Banner from "./components/banner";
import Cards from "./components/cards";
import SearchBar from "./components/searchBar";
import Hero from "./components/hero";
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
    </>
  );
}

export default App;
