import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <p className="footer-text">© 2023 Blood Bond. All rights reserved.</p>
        </footer>
    )
}

export default Footer;