import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
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
