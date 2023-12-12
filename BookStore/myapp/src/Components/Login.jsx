import '../Assets/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
          navigate('/home');
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
    <div class="login-box">
  <p>Login</p>
  <form onSubmit={log}>
    <div class="user-box">
      <input type="text" name="" id="username" onChange={HandleChange}/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" id="password" onChange={HandleChange}/>
      <label>Password</label>
    </div>
    <button href="#" className='button'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
  <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
  <p>If Admin,Click here<a href="" class="a2">Admin</a></p>
</div>

</>

        

)



}