import React from 'react';
import './Assests/css/App.css'

import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div>
        <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register />}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
