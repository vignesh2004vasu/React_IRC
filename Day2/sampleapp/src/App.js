import React from 'react';
import './Assests/css/App.css'

import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Users from './Components/Users';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <Router>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register />}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
