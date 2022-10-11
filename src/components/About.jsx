import React from 'react'
import image from '../assets/about.png'

export default function About() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src={image} alt="About"
                        className='w-75 mt-5' />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h3 className='display-6 mb-2'>Who <b>are</b> we</h3>
                        <hr className='w-50' />
                        <p className='lead mb-4'>
                        JIET Institute of Design and Technology is <strong>Rajasthan’s</strong>  first AICTE approved college to offer UG courses in Design and Futuristic Technology (4.0). The institute is approved by <strong>AICTE, New Delhi,</strong>  and affiliated with Bikaner Technical University, Bikaner. 
JIET Institute of Design and Technology has taken a big leap as they have collaborated with <strong>upGrad & Cipher Schools.</strong>  This makes <strong>JIETDAT</strong>  first and foremost amongst all the RTU / BTU affiliated institutes to have associated with such a valuable online higher education platform.
                        </p>
                        {/* <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact US</button> */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
