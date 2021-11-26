import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Music from "./components/Music/Music";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MusicDetails from "./components/Music/MusicDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <BurgerMenu />
      <div className="container_page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music/:id" element={<MusicDetails />} />
        </Routes>
      </div>
      <Footer />{" "}
    </div>
  );
}

export default App;
