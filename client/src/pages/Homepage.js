import React from 'react'
import Navbar from '../components/Navbar';
import background from '../images/blood-donar.jpg'
import { Link } from 'react-router-dom';
import img1 from '../images/registration.jpg';
import img2 from '../images/bloodcheck.jpg';
import img3 from '../images/donation.jpg';
import img4 from '../images/Refreshment.jpg';
import '../css/homepage.css'
const Homepage = () => {
  const styles = {
    header: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    buttonLink: {
      width: '140px',
      height: '45px',
      fontFamily: 'Roboto, sans- serif',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      fontWeight: '800',
      color: 'white',
      BackgroundColor: '#fff',
      border: 'none',
      borderRadius: '45px',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease 0s',
      cursor: 'pointer',
      outline: 'none',
    }
  }
  return (
    <div>
      <Navbar />
      <div style={styles.header} className='img-container'>
        <div className='img-container-inside'>
          <h2>GIVING BLOOD, SPREADING LOVE!"</h2>
          <h1>GIVE THE GIFT OF LIFE, DONATE BLOOD AND JOIN THE CAUSE WITH US.</h1>
          <button style={styles.buttonLink}><Link style={{ color: 'white' }} to="/homepage">JOIN US!</Link></button>
        </div>
      </div>
      <div className='donation-p'>
        <div className='donation-p-inside'>
          <h1>DONATION PROCESS</h1>
          <hr></hr>
          <p>The donation process from the time you arrive at center until the time you leave</p>
        </div>
      </div>
      <div className='p-cards-container'>
        <div className='card'>
          <img src={img1} alt="Avatar" />
          <div className="container">
            <h2><b>Registration</b></h2>
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
            <p>After passing screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>
          </div>
        </div>
        <div className='card'>
          <img src={img4} alt="Avatar" />
          <div className="container">
            <h2><b>REFRESHMENT</b></h2>
            <p>you can also stay in the sitting room until you feel strong enough to leave the center. You will receive refreshments in the donation zone</p>
          </div>
        </div>
      </div>
      <footer>

    <div class="row">

      <div class="column">

        <h4>About Us</h4>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus euismod, faucibus metus ut, semper nibh. Aenean euismod justo eu enim dapibus suscipit.</p>

      </div>

      <div class="column">

        <h4>Quick Links</h4>

        <ul>

          <li><i class="fa fa-angle-right"></i> Subscription</li>

          <li><i class="fa fa-angle-right"></i> Contact us</li>

         <li><i class="fa fa-angle-right"></i> Bug report</li>

        </ul>

      </div>

      <div class="column">

        <h4>Connect with Us</h4>

        <ul class="social-icons">

          <li><i class="fa-brands fa-facebook-f"></i></li>

          <li><i class="fa-brands fa-instagram"></i></li>
          
          <li><i class="fa-brands fa-twitter"></i></li>

            <li><i class="fa-brands fa-github"></i></li>

        </ul>

      </div>

    </div>

    <p class="copyright">© 2023 All Rights Reserved</p>

  </footer>
    </div>
  )
}

export default Homepage