import React from 'react'

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
                            <button className="btn btn-light me-4 rounded-pill px-4 py-2">Explore Activites</button>
                            <button className="btn btn-outline-light me-4 rounded-pill px-4 py-2">Gallary</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
