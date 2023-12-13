import '../Assets/Login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login()
{
  const navigate = useNavigate();
  const [data,setData]=useState({

    username:'',
    password:''

  })

const log=(e)=>
{
  e.preventDefault();
  const a=localStorage.getItem('uname');
  const b=localStorage.getItem('pass');
  if(a===data.username && b===data.password)
  {
          localStorage.setItem('isLoggedIn', true); 
          navigate('/home');
  }
  else
      alert('Invalid Credentials');
}

  const HandleChange=(e)=>
  {
      setData({...data,[e.target.id]:e.target.value})

  }


return(

<>
<Navbar/>
<div className="login-box">
      <p>Login</p>
      <form onSubmit={log}>
        <div className="user-box">
          <input type="text" name="" id="username" onChange={HandleChange} />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" id="password" onChange={HandleChange} />
          <label>Password</label>
        </div>
        <button href="#" className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      <p><a href="" className="a2">Don't have an account? Sign up!</a></p>
      <p><a href="" className="a2">If Admin,</a>
      <Link to='/admin'>
      <a className='a2'>Click Here</a>
      </Link> 
      
      </p>
    </div>
</>

        

)



}