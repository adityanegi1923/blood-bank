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
        <li className="nav-link"><Link to="/homepage" className='nav-link-item'>Home</Link></li>
        <li className="nav-link"><Link to="/aboutpage" className='nav-link-item'>About</Link></li>
        <li className="nav-link"><Link to="/donatepage" className='nav-link-item'>Become a Donor</Link></li>
        <li className="nav-link"><Link to="/contactpage" className='nav-link-item'>Contact Us</Link></li>
        <li className="nav-link"><button><Link to="/login"><img src={logout} alt="Log Out" className="logout" /></Link></button></li>
      </ul>
    </nav>

  )
}

export default Navbar
