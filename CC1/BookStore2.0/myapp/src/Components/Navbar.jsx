import '../Assets/Navbar.css'
import { Link } from 'react-router-dom'
import w1 from '../Assets/icons8-book-64.png'
export default function  Navbar()
{
    

    return(

       <>
        <div className="navbar">
            <div>
                <img src={w1} alt='logo'/>
            </div>
            <ul class="nav-links" id="home">
                    <Link
                    to="/home"
                    >
                    <li><a href="#home">Home</a></li>
                    </Link>
                    <Link
                    to="/login"
                    >
                    <li><a href="#home">Login</a></li>
                    </Link>
                    <Link
                    to="/register"
                    >
                    <li><a href="#home">Register</a></li>
                    </Link>
                    
                    
            </ul>
        </div> 
       </>

    )
}