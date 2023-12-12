import '../Assets/Navbar.css'
import { Link } from 'react-router-dom'
export default function  Navbar()
{

    return(

       <>
        <div className="navbar">
            <ul class="nav-links">
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