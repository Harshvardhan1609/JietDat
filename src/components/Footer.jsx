import React from 'react'
import '../App.css'
export default function Footer() {
  return (
    <div>
    <footer class="py-5 footer">
    <div class="row">
      <div class="col-2">
      </div>
      <div class="col-6 offset-1 ">
        <form class="text-center text-light">
          <h5 className='fs-4 fw-bold'>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div class="d-flex w-100 gap-2">
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
      <p className='text-center mt-3 text-light'>© 2022 JIETDAT, Inc. All rights reserved.</p>
  </footer>
    </div>
  )
}
