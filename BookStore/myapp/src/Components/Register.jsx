import '../Assets/Register.css'
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
export default function Register()
{
    const navigate = useNavigate();
    const [data,setData]=useState({

        username:'',
        email:' ',
        password:'',
    
      })

      const Reg=(e)=>
      {
        e.preventDefault();
          localStorage.setItem('uname',data.username);
          localStorage.setItem('email',data.email)
          localStorage.setItem('pass',data.password);
          navigate('/login');

      }
    
      const HandleChange=(e)=>
      {
          setData({...data,[e.target.id]:e.target.value})
    
      }
    return(

<>
<Navbar/>
        <div class="login-box">
  <p>Register</p>
  <br/>
  <br/>
  <form onSubmit={Reg}>
    <div class="user-box">
      <input type="text" name="" id="username" onChange={HandleChange}/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="email" name="" id="email" onChange={HandleChange}/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" id="password" onChange={HandleChange}/>
      <label>Password</label>
    </div>
 
    <button href="#" className='button'>
 
      Submit
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </form>
  
</div>
</>
    )
}