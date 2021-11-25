import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Music from "./components/Music/Music";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Trip from "./components/Music/Styles/Trip";
import Classical from "./components/Music/Styles/Classical";
import Eighties from "./components/Music/Styles/Eighties";
import Techno from "./components/Music/Styles/Techno";
import Electro from "./components/Music/Styles/Electro";
import "./App.css";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BurgerMenu />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/music/classical" element={<Classical />} />
            <Route path="/music/eighties" element={<Eighties />} />
            <Route path="/music/electro" element={<Electro />} />
            <Route path="/music/techno" element={<Techno />} />
            <Route path="/music/triphop" element={<Trip />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
