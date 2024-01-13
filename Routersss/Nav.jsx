import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>

        <img src="https://cdn.pixabay.com/photo/2020/07/06/17/43/learn-5377778_1280.png" alt="" height={"50px"} width={"50px"} />
        
        </div>
        <div >
          <ol className='components'>
            <Link to={"/Home"}>Home</Link>
            <Link to={"/About"}>About</Link>
             <Link to={"/Login"}>Login</Link>
             <Link to={"/Help"}>Help</Link>
             <Link to={"/SignUp"}>SignUp</Link>
            
          </ol>
        </div>
      
    </div>
  )
}

export default Nav