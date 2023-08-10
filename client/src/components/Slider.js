import React from 'react'
import img1 from '../images/human1.jpg'
import img2 from '../images/human2.jpg'
import img3 from '../images/human3.jpg'
import img4 from '../images/human4.jpg'
import img5 from '../images/human5.avif'
import img6 from '../images/human6.webp'
import '../css/Slider.css'
const Slider = () => {
    return (
        <>
            <div className='Slider-container'>
                <h1><u>Our Recent Hero Donors</u></h1>
                <div className='slider'>
                    <div className='slide-track'>
                        <div className='slide'>
                            <img src={img1} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img2} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img3} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img4} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img5} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img6} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img1} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img2} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img3} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img4} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img5} alt="#"></img>
                        </div>
                        <div className='slide'>
                            <img src={img6} alt="#"></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slider
