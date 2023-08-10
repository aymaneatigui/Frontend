import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Pages/Authentication/Login';
import Signup from './Components/Pages/Authentication/Signup';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Header';
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
