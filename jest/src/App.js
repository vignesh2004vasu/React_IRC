
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
import Counter from './pages/Counter';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/count' element={<Counter/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
