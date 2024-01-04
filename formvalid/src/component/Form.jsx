import { useRef, useState } from 'react'

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const username = useRef(null)
    const password = useRef(null)

    const [errors,setErrors] = useState({

      username:'',
      password:''

    })

    // const [data, setData] = useState({
    //     username: '',
    //     password: ''
    // })
    // const handleCahnge = (e) => {
    //     setData({ ...data, [e.target.id]: e.target.value })
    // }
    const Login = (e) => {
        e.preventDefault();
        const data ={
            username : username.current.value, 
            password : password.current.value
        }
        console.log(data)

        if(errors.username)

        username.current.value =''
        password.current.value =''

        username.current.focus()
        // alert(data.username + data.password)
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
                               errors.username ==''?'' : 
                                        <span className='error-cmpt'>
                                          {errors.username}
                                        </span>
                            }
                            <input type="password" name="" id="password" placeholder="Password" className="auth-input"  ref={password}/>
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