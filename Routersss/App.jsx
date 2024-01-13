import React from 'react'
import Nav from './Nav';
import Home from './Home'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Help from './Help';
import SignUp from './SignUp';
import Pagenotfound from './Pagenotfound';



const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/pagenotfound' element={<Pagenotfound/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App