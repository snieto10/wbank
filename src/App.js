import NavBar from "./components/navBar";
import Banner from "./components/banner";
import Cards from "./components/cards";
import "./normalize.css";
import "./App.css";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Cards />
      <SearchBar />
    </>
  );
}

export default App;
