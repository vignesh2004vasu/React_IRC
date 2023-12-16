
import './Assets/App.css';
import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Users from './Components/Users';
import BookDetails from './Components/BookDetails';
import EditUser from './Components/EditUser';
import Books from './Components/Books';
import EditBook from './Components/EditBook';
import AddBook from './Components/AddBook';
import AdminAuth from './Components/AdminAuth';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<Users />} />
        <Route path="/admin" element={<AdminAuth />} />
        <Route path="/book/:id" component={<BookDetails  title="harry"/>} />
        <Route path="/edituser/:id" element={<EditUser/>}/>
        <Route path="/editbook/:id" element={<EditBook/>}/>
        <Route path="/book" element={<Books/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        
      </Routes> 
   
    </div>
  );
}

export default App;
