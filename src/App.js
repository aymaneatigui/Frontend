import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Header from './Components/Header';
import Signup from './Components/Pages/Signup';
import Users from './Components/Pages/Users';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </Router>
  );
}

export default App;
