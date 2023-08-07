import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/donatepage.css'
import Candonatepage from "./Candonatepage.js";

const Donatepage = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [alternateContactNumber, setAlternateContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreementChecked) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    //an object to hold the donor information
    const donorInfo = {
      fullName,
      age,
      bloodType,
      contactNumber,
      alternateContactNumber,
      email,
      password,
      confirmPassword,
    };

    // Here, you can perform any further actions with the donor information, like sending it to a server or storing it in a database.

    // Reset the form after submission
    setFullName('');
    setAge('');
    setBloodType('');
    setContactNumber('');
    setAlternateContactNumber('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAgreementChecked(false);
  };

  return (
    <div>
      <Navbar />
      <div className="content">

        <div className="heading-wrapper">
          <h1>BECOME A <span>DONOR</span></h1>
          <h5><i>"A true hero doesn't wear a cape; they donate blood, saving lives without expecting anything in return."</i></h5>
          <h5> <Link to="/candonatepage">Click here to know who can donate blood.</Link></h5>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Your Full Name:
                <input type="text" placeholder="FirstName LastName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </label>
            </div>
            <div>
              <label>
                Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
              </label>
            </div>
            <div>
              <label>
                Blood Group:
              </label>
              <select value={bloodType} onChange={handleBloodTypeChange} required>
                <option value="">----Select Blood Group----</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div>
              <label>
                Contact Number: (+91)
                <input type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
              </label>
            </div>
            <div>
              <label>
                Alternate Contact Number: 
                (+91)<input
                  type="tel"
                  value={alternateContactNumber}
                  onChange={(e) => setAlternateContactNumber(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Email Address:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </label>
            </div>
            <div>
              <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </label>
            </div>
            {password !== confirmPassword && <p>Passwords do not match.</p>}
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={agreementChecked}
                  onChange={(e) => setAgreementChecked(e.target.checked)}
                  required
                />
                I agree that all the provided information is valid and accurate.
              </label>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Donatepage;
