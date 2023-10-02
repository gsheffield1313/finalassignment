import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import List from './List';
import Review from './Review';
import Update from './Update';
import Read from './Read';
import './App.css'
import { Dropdown } from 'semantic-ui-react';
import Login from './Login';
import Car from './ Car';


function App() {
  return (//browser router to links//
    
     <BrowserRouter>
     <header>
     <nav>
     <div style={{ display: 'inline', float: 'right' }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/review">Review</Link>
        </li>
        <li>
          <Link to="/read">Read</Link>
        </li>
        <li>
          <Link to="/dropdown">Dropdown</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
        <li>
          <Link to="/car">Car</Link>
        </li>
        
      </ul>
      </div>
     </nav>
     </header>
     <main>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/list" element={<List />} />
          <Route path="/review" element={<Review />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/dropdown" element={<Dropdown/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/car" element={<Car />} />

          

      </Routes>

      
     </main>
     </BrowserRouter>
  );
}

export default App;
