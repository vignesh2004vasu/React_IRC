import { useRef, useState } from 'react'

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const username = useRef(null);
    const password = useRef(null);
    const confirmpassword = useRef(null);


    const [errors,setErrors] = useState({

      username:'',
      password:'',
      confirmpassword: '',

    })

    const Login = (e) => {
        e.preventDefault();
        const data ={
            username : username.current.value, 
            password : password.current.value,
            confirmpassword : confirmpassword.current.value,
         
        }
        console.log(data)

        if(data.password !== data.confirmpassword) {
            setErrors({ ...errors, password: 'Passwords do not match', confirmpassword: 'Passwords do not match' });
        } else {
            setErrors({ ...errors, password: '', confirmpassword: '' });
        }
        


        // alert(data.username + data.password)
        if(data.username.length ===0) {
            setErrors({ ...errors, username: 'username is empty' });
        }
        else if (data.username.length < 6) {
            setErrors({ ...errors, username: 'min 6 char' });
          } 
           else {
            setErrors({ ...errors, username: '' });
          }
    }

   

    const toggle = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <div className="navbar">
                <div className="navtitle">
                    Hello world
                </div>
                <ul className="navlinks">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li onClick={toggle}>
                        Login
                    </li>
                </ul>
            </div>
            {visible ? (
                <div className='card-wrapper'>
                    <div className="">
                        <h2 className="auth-title">Login</h2>
                        <form className="auth-container h-30v shadow" onSubmit={Login}>
                            <input type="text" name="" id="username" placeholder="Username" className="auth-input"  ref={username}/>
                            {
                               errors.username ===''?'' : 
                                        <span className='error-cmpt'>
                                          {errors.username}
                                        </span>
                            }
                           
                            <input type="text" name="" id="password" placeholder="Password" className="auth-input"  ref={password}/>
                            {
                                errors.password ===''?'':
                                <span className='error-cmpt'>
                                          {errors.password}
                                </span>

                            }
                            <input type="text" name="" id="confirmpassword" placeholder="confirmPassword" className="auth-input"  ref={confirmpassword}/>
                            {
                                errors.confirmpassword ===''?'':
                                <span className='error-cmpt'>
                                          {errors.confirmpassword}
                                </span>

                            }
                            <span className='btn-container'>
                                <input type="submit" value="Login" className="auth-btn w-50" />
                                <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                            </span>
                        </form>
                    </div>
                </div>
            ) : ('')
            }
        </div>
    )
}

export default NavBar