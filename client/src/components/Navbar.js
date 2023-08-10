import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/navbar.css'
import logo from '../components/logo.png'
import { useState } from 'react'
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { logout } from '../Redux/authSlice';
import { useSelector } from 'react-redux'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isloggedin = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav className='upper-nav'>
      <Link to="/" className="title">
        <img alt='#' src={logo} id="logo" />
        <h1>   Blood Bond</h1>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        {isloggedin && (
          <li>
            <NavLink to="/donatepage" className='nav-link-item'><b>Become a Donor</b></NavLink>
          </li>
        )}
        <li>
          <NavLink to="/aboutpage"><b>About</b></NavLink>
        </li>
        <li>
          <NavLink to="/contactpage"><b>Contact</b></NavLink>
        </li>
        {isloggedin ?
          <li>
            <Link to="/login" onClick={logout}><FaSignOutAlt style={{ color: 'white' }} /></Link>
          </li>
          :
          <li>
            <Link to="/login"><FaSignInAlt style={{ color: "white" }} /></Link>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Navbar
