import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'

export default function Home() {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white mt-5">
                            AUORA OF TECHNOLOGY
                        </h1>
                        <p className='lead text-center fs-4 mb-5 text-white mt-5'>
                            Experience the world of technology with stunning talks , workshops , events and interactions
                        </p>
                        <div className="buttons d-flex justify-content-center mt-5">
                            <NavLink to="/latestevent" className="btn btn-light me-4 rounded-pill px-4 py-2">Latest Event</NavLink>
                            <NavLink to="/gallary" className="btn btn-outline-light me-4 rounded-pill px-4 py-2">Gallary</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}
