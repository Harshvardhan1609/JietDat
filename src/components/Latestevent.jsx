import React from 'react'
import Header from './Header'
import engineers from '../assets/gallary/engineers.png'
import open from '../assets/gallary/open.jfif'

export default function Latestevent() {
  return (
    <div>
    <section id="latestevent">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12">
                    <Header mainh1 = "Explore" bolder="Latest" mainh2 = "Event"/>
                </div>
            </div>
            <div className="row mt-4 ">
            {/* <div className="col-md-4 mb-2"> */}
            <div className="col-md-6 mb-2 align-items-center">
    <div class="card p-1  card-block text-center ">
  <img className="card-img-top rounded shadow" src = {engineers} alt="Card cap"/>
  <div class="card-body text-center">
    <h5 class="card-title  fs-5 fw-bold">Engineers day fest</h5>
  </div>
    <a href="https://www.youtube.com/watch?v=wLqr65rW1kA&t=5827s" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill">Watch Now</a>
</div>
    </div>
    <div className="col-md-6 mb-2 align-items-center">
    <div class="card p-1  card-block text-center ">
  <img className="card-img-top rounded shadow" src = {open} alt="Card cap"/>
  <div class="card-body text-center">
    <h5 class="card-title  fs-5 fw-bold">Open Source Development</h5>
  </div>
    <a href="/" class="btn btn-primary rounded-pill">Coming Soon</a>
</div>
    </div>
                </div>
                </div>
    </section>
</div>
  )
}
