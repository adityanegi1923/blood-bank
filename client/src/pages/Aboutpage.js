import React from 'react'
import Navbar from '../components/Navbar'
import img from '../images/about.webp'
const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <div className='upper-content'>
        <h1>About Us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
      </div>
      <div className='lower-content'>
        <div className='left-about'>
          <div className='p-content'>
            <h1>About Blood Doners</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formhumour, or randomised words which don't look even slightly believable. If you are going to use a passage. industry's standard dummy has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

              Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
        <div className='right-about'>
          <img alt="" src={img}></img>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage