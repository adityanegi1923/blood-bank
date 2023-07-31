import React from 'react'
import Navbar from '../components/Navbar'
import '../css/contactus.css'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Contactpage = () => {
  return (
    <div>
      <Navbar />
      <div className="contact" id="contact">
        <h1 className="heading">CONTACT <span>US!</span></h1>
        <div className="form-wrapper">
          <form action="#">
            <h4 className="messageHeading">Wanna share a feedback, query or suggestion? <br />Send us a message and we'll get in touch shortly!</h4>
            <div className="input-box">
              <div className="input-item">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="input-item">
                <input type="email" placeholder="Email Address" />
              </div>
            </div>
            <div class="input-box">
              <div className="input-item">
                <input type="tel" placeholder="Mobile Number" />
              </div>
              <div className="input-item">
                <input type="text" placeholder="Email Subject" />
              </div>
            </div>
            <div className="input-box">
              <textarea name="message" id="message" cols="60" rows="10" placeholder="Your Message"></textarea>
            </div>

            <input type="submit" value="Send Message" class="btn" />
          </form>
        </div>
        {/* Contact details */}
        <div className="contact-details">
          <h3><u>Contact Details</u></h3>
          <p><strong>Phone: </strong> 9898989898 , 9879879876</p>
          <p><strong>Email id: </strong>mybloodisred@gmail.com</p>
          <p><strong>Office Address: </strong>143, Near MokshaDham cemetry, Khooningar, <br />New-Delhi-249202</p>
          <div className="social-icons">
            <a href="#"><FaFacebook className="icons"/></a>
            <a href="#"><FaInstagram className="icons"/></a>
            <a href="#"><FaTwitter className="icons"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactpage
