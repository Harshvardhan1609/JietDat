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
                            We are the elite department in the field of artificial intelligence and machine learning we host continous event and sessions to boost both technical and soft skills of an individual.
                        </p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact US</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
