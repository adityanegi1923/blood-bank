import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import logo from './logo.png';
import logout from './logout.png';

const Navbar = () => {
  return (
    
    <nav className="navbar-container">
      <div className="logo-container">
      <a href="/homepage">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <a href="/homepage">BLOOD BOND</a>
      </div>

      {/* <div className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div> */}

      <ul className="nav-items">
        <li className="nav-link"><Link to="/homepage">Home</Link></li>
        <li className="nav-link"><Link to="/aboutpage">About</Link></li>
        <li className="nav-link"><Link to="/donatepage">Donate</Link></li>
        <li className="nav-link"><Link to="/contactpage">Contact Us</Link></li>
        <li className="nav-link"><button><Link to="/login"><img src={logout} alt="Log Out" className="logout" /></Link></button></li>
      </ul>
    </nav>

  )
}

export default Navbar
