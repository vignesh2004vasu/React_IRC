
import './Assets/App.css';
import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Users from './Components/Users';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Users />} />
        
      </Routes> 
   
    </div>
  );
}

export default App;
