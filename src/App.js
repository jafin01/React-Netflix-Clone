import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, comedyMovies, horrorMovies, originals, romanceMovies } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' isOriginals url={originals} />
      <RowPost title='Action' url={action} />
      <RowPost title='Comedy' url={comedyMovies} />
      <RowPost title='Horror' url={horrorMovies} />
      <RowPost title='Romance' url={romanceMovies} />
    </div>
  );
}

export default App;
