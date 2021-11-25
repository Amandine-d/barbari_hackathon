import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import './App.css';
import MusicDetails from './components/Music/MusicDetails';

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
            <Route path='/music/:id' element={<MusicDetails />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
