import React from 'react'
import Header from './Header'
import contactimg from '../assets/contact.png'

export default function Contact() {
  return (
    <div>
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                    <Header mainh1 = "Intract with US" bolder="Contact" mainh2 = "US"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={contactimg} alt="" className='w-75' />
                    </div>
                    <div className="col-md-6">
                        <form action="">
                        <div class="mb-3">
  <label for="name" class="form-label">Name</label>
  <input type="text" class="form-control" id="name" placeholder="Harshvardhan "/>
  </div>
  <div class="mb-3">
  <label for="email" class="form-label">Email Address</label>
  <input type="email" class="form-control" id="email" placeholder="harshvardhan.20jdai021@jietjodhpur.ac.in "/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<button className="btn btn-outline-primary rounded-pill px-4"> Send Message <i className='fa fa-paper-plane ms-2'></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
