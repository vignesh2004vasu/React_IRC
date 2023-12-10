import React, { useState } from 'react';
import '../Assests/css/Register.css'
import Navbar from './Navbar';

function Register(){

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    })

    const{username,email,password}=user

  return (
    <div>
      <Navbar/>
    <div className="main-container">
     
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="input-group">

            <input type="text" id="username" name="username" placeholder="Enter Username" value={username} />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Enter Username" value={email}/>
          </div>
          <div className="input-group">
                     <input type="password" id="password" name="password" placeholder="Enter Password" value={password}/>
          </div>
          <div className="input-group">
                     <input type="password" id="cpassword" name="password" placeholder="Confirm Password"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
