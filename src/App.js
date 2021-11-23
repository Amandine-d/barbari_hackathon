import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>

      </header>
    </div>
  );
}

export default App;
