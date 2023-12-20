
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/edit' element={<EditUser/>}/>
    </Routes>


    </>
  );
}

export default App;
