import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import logo from './logo.png';
import { useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';
import logoo from '../components/logout.png'
import login from '../components/login.png'
const Navbar = () => {
  const isloggedin = useSelector(state=>state.auth.isLoggedIn);
  return (
    <nav className="navbar-container">
      <div className="logo-container">
      <a href="/homepage">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <a href="/homepage">BLOOD BOND</a>
      </div>
      <ul className="nav-items">
        <li className="nav-link"><Link to="/homepage" className='nav-link-item'>Home</Link></li>
        <li className="nav-link"><Link to="/aboutpage" className='nav-link-item'>About</Link></li>
        {isloggedin && (
          <li className="nav-link">
            <Link to="/donatepage" className='nav-link-item'>Become a Donor</Link>
          </li>
        )}
        <li className="nav-link"><Link to="/contactpage" className='nav-link-item'>Contact Us</Link></li>
        {isloggedin ? <div className="logout">
          <li className="nav-link"><button><Link to="/login" onClick={logout}><img src={logoo} alt='#' /></Link></button></li>
        </div>  
        :
        <div className="login">
          <li className="nav-link"><button><Link to="/login"><img src={login} alt='#' /></Link></button></li>
        </div>
        }
        
      </ul>
    </nav>

  )
}

export default Navbar
