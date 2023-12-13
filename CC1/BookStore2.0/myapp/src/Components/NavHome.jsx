import '../Assets/NavHome.css'
import w1 from '../Assets/icons8-book-64.png';
import { Link } from 'react-router-dom';



export default function NavHome() {

    const logout=(e)=>
    {
        localStorage.setItem('isLoggedIn',false)
    };

    return(

        <>
        <div className="navbar">
            <div>
                <img src={w1} alt='logo'/>
            </div>
            <ul class="nav-links" id="home1">
                    <Link
                    to="/home"
                    >
                    <li><a href="#home">Home</a></li>
                    </Link>
                    <Link
                    to="/login"
                    >
                    <li><a href="#home" onClick={logout}>Logout</a></li>
                    </Link>
                    
                    
                    
            </ul>
        </div> 
       </>
    )
    
};
