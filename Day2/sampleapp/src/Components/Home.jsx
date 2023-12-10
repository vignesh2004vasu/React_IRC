import '../Assests/css/Home.css'
import Navbar from './Navbar';
import { useEffect,useState } from 'react';
function Home()
{
    const [localStorageItem, setLocalStorageItem] = useState('');

  
  useEffect(() => {
    
    const itemFromLocalStorage = localStorage.getItem('username');

    if (itemFromLocalStorage) {
      setLocalStorageItem(itemFromLocalStorage);
    }
  }, []);

    return(
        <div>
            <Navbar/>
            <div className="main-container" style={{ backgroundColor: 'white' }}>
                <div>
                <h1>LOGIN SUCCESSFUL</h1>

                </div>
                <div>
                   <h1>
                    {localStorageItem}
                    </h1> 
                </div>
                

        </div>
            
        </div>
    )
}

export default Home;