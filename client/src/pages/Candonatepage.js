import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/candonate.css'

const Candonatepage = () => {
    return (
      <div className="page">
      <Navbar />
      <h1>BLOOD DONOR - ELIGIBILITY CRITERIA</h1>
      <div className="content-wrapper">
        
        <p>
          Blood donation is a crucial act of kindness that saves lives. However, not everyone is eligible to donate blood. Understanding who can and cannot donate blood is essential to ensure the safety of both the donor and the recipient. <br/><span>Below are some general guidelines on eligibility for blood donation:</span>
        </p>
        <h2>Who Can Donate Blood?</h2>
        <p>Any healthy adult, both male and female, can donate blood. Men can donate safely once in every three months while women can donate every four months.</p>
        <ul>
            <li><b>Age:</b> Healthy individuals aged between 18 to 65 years are eligible to donate blood.</li>
            <li><b>Weight:</b> Donors should have a minimum weight of 50 kg (110 pounds).</li>
            <li><b>Pulse:</b> Temperature and pulse rate of the donor should be normal.</li>
            <li><b>Blood Pressure:</b> The systolic and diastolic blood pressures are within normal limits.</li> 
            <li><b>Hemoglobin Level:</b> The minimum hemoglobin level required for donation is 12.5 g/dL.</li>
            <li><b>Health:</b> Donors should be in good health at the time of donation. They should not have any acute illnesses or infections.</li>
            <li><b>Malaria:</b> Should Not have been treated for malaria in last 3 months or 3 years if residing in endemic areas</li>
            <li><b>Immunization and Vaccination:</b> Should NOT have had shots for any of the following - Cholera, Typhoid, Diptheria, Tetanus, Plague, Gammaglobulin in last 15 days; Rabies vaccination in last 1 year.</li>
            <li><b>Scars/Skin Puncture:</b> Arms & Forearms should be free from Skin punctures or Scars which are indicative of Intravenous drug use or frequent blood donations.</li>
            <li><b>Heart Disease:</b> Should NOT have any Heart diseases.</li>
            <li><b>Other diseases:</b> Should NOT have Epilepsy, Asthma on Steroids, Bleeding disorders, Thalassemia, Sickle Cell Anemia, Polycythemia Vera.</li>
            <li><b>Travel History:</b> Donors who have recently traveled to areas with high-risk infections may have temporary restrictions.</li>
            <li><b>Pregnancy and Lactation:</b> Pregnant women and new mothers should avoid blood donation.</li>
            <li><b>Child Birth:</b> Should have delivered 1 year ago and stopped lactation.</li>
            <li><b>Medications: </b> Certain medications may pose a risk to the donor or recipient, and if you're taking them you will not be able to give blood.</li>
        </ul>
        <div className='note'>
        <p>
        <b>Note:</b> Confirmation of your eligibility to donate blood is done by professionals attached with Blood banks. 
        Donating blood can save lives and help those in need. If you are eligible based on points mentioned above, consider registering and contributing to this noble cause.
        </p>
        </div>
        
      </div>
      <Footer/>
    </div>
    )
  }
  
  export default Candonatepage