import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import homeimg from '../images/home-img.png';
import { Link } from 'react-router-dom';
import img1 from '../images/registration.jpg';
import img2 from '../images/bloodcheck.jpg';
import img3 from '../images/donation.jpg';
import img4 from '../images/Refreshment.jpg';
import '../css/homepage.css'
import Slider from '../components/Slider';
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h2>GIVING BLOOD, SPREADING LOVE!"</h2>
          <h1>GIVE THE GIFT OF LIFE, DONATE BLOOD AND JOIN THE CAUSE WITH US.</h1>
          <div className="home-btn">
            <button ><Link style={{ color: 'white' }} to="/homepage">Need Blood?</Link></button>
            <button ><Link style={{ color: 'white' }} to="/donatepage">Donate Blood!</Link></button>
          </div>
          
        </div>
        <div className="home-img">
          <img src={homeimg} alt="blood-bond-image" />
        </div>
      </div>
      <div className='donation-p'>
        <div className='donation-p-inside'>
          <h1><u>DONATION PROCESS</u></h1>
          <p>The donation process from the time you arrive at center until the time you leave</p>
        </div>
      </div>
      <div className='p-cards-container'>
        <div className='card'>
          <img src={img1} alt="Avatar" />
          <div className="container">
            <h2><b>REGISTRATION</b></h2>
            <p>You need to complete a very simple registration form which contatins all required contact information to enter in the donation process.</p>
          </div>
        </div>
        <div className='card'>
          <img src={img2} alt="Avatar" />
          <div className="container">
            <h2><b>SCREENING</b></h2>
            <p>A drop of blood from your finger will be taken for a simple test to ensure that your blood levels are proper enough for donation.</p>
          </div>
        </div>
        <div className='card'>
          <img src={img3} alt="Avatar" />
          <div className="container">
            <h2><b>DONATION</b></h2>
            <p>After passing screening test successfully you will be directed to a donor bed for blood donation. It will take only 6-10 minutes.</p>
          </div>
        </div>
        <div className='card'>
          <img src={img4} alt="Avatar" />
          <div className="container">
            <h2><b>REFRESHMENT</b></h2>
            <p>You can also stay in the sitting room until you feel strong enough to leave the center. You will receive refreshments in the donation zone</p>
          </div>
        </div>
      </div>
      <Slider />
      <Footer/>
    </div>
  )
}

export default Homepage