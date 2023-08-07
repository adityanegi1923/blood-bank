import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img from '../images/about.jpg'
import '../css/aboutpage.css'

const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className='upper-content'>
          <h1>ABOUT US</h1>
        </div>
        <div className='lower-content'>
          <div className='right-about'>
            <img alt="" src={img}></img>
          </div>
          <div className='left-about'>
            <div className='p-content'>
              <p>At Blood Bond, we believe that the act of donating blood goes beyond a simple transaction; it is an act of selflessness and compassion that binds us all together as a community. Our dedication to excellence and continuous improvement drives us to stay at the forefront of medical advancements and best practices in blood banking. We ensure that our blood supply remains readily available and accessible whenever and wherever it is needed most.
                <br/>With a robust network of mobile blood drives and conveniently located donation centers, we make the process of giving blood easy and convenient for our donors. Each donor becomes a crucial link in the life-saving chain, making a profound impact on the lives of patients in need.


                <br />At Blood Bond, we celebrate the unsung heroes—the donors—who generously offer their blood, time, and support, knowing that their actions can be the difference between life and death for someone else. We are inspired by the resilience and strength of those we serve and the unyielding spirit of humanity that runs through our veins, binding us together in a shared mission of healing and hope.

                <br />Together, as a united force, we forge unbreakable bonds of compassion, support, and unity. Blood Bond will continue to serve as the heartbeat of our communities, nourishing the precious connection we all share, one drop at a time.</p>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Aboutpage