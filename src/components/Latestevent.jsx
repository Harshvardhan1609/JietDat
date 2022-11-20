import React from 'react'
import Header from './Header'
import engineers from '../assets/gallary/ban.jpg'
import open from '../assets/gallary/super.jpg'
import { useNavigate } from 'react-router-dom'

export default function Latestevent() {
  const linking = "../Event"
  const navigate = useNavigate();
  const pp = `${linking}`;
  const goToContact = () => {
      navigate(pp);
  
  }
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
    <h5 class="card-title  fs-5 fw-bold">Ideavita Nov 2022</h5>
  </div>
    <a href="https://forms.gle/pE4uezuShR3TbJBz5" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill">Register Now</a>
</div>
    </div>
    <div className="col-md-6 mb-2 align-items-center">
    <div class="card p-1  card-block text-center ">
  <img className="card-img-top rounded shadow" src = {open} alt="Card cap"/>
  <div class="card-body text-center">
    <h5 class="card-title  fs-5 fw-bold">Super Sixer League</h5>
  </div>
    {/* <a href="https://memzo.app/2385-JGI-Pics-2022-23278" target={"_blank"} rel="noreferrer"   class="btn btn-primary rounded-pill">Rules</a>
     */}
     {/* <NavLink to="/Eventrules" className="btn btn-primary me-4 rounded-pill px-4 py-2">Explore More</NavLink> */}
     <button className='btn btn-primary rounded-pill' onClick={() => goToContact()}>Explore Now</button>
</div>
    </div>
                </div>
                </div>
    </section>
</div>
  )
}
