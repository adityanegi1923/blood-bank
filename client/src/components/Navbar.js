import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <Link to="/homepage">BLOOD BANK</Link>
      </div>

      <div className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className="nav-items">
        <li className="nav-link"><Link to="/homepage">Home</Link></li>
        <li className="nav-link"><Link to="/aboutpage">About</Link></li>
        <li className="nav-link"><Link to="/contactpage">Contact</Link></li>
        <li className="nav-link"><button><Link to="/login">Log Out</Link></button></li>
      </ul>
    </nav>

  )
}

export default Navbar
