import React from 'react';
import '../Assests/css/Register.css'
import Navbar from './Navbar';

function Register(){
  return (
    <div>
      <Navbar/>
    <div className="main-container">
     
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="input-group">

            <input type="text" id="username" name="username" placeholder="Enter Username" />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Enter Username"/>
          </div>
          <div className="input-group">
                     <input type="password" id="password" name="password" placeholder="Enter Password"/>
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
