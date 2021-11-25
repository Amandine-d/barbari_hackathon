import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import BurgerMenu from "./components/BurgerMenu/BurgerMenu"
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import MusicDetails from './components/Music/Styles/MusicDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BurgerMenu />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/music' element={<Music />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/music/*' element={<MusicDetails />} />
          </Routes>
          <Footer/>
        </div>
      </header>
    </div>
  );
}

export default App;
