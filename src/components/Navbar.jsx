import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
 <div>
    <nav className="navbar navbar-expand-lg navbar-light shadow">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallary">Gallary</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fw-bolder fs-4 mx-auto " to="/">JIETDAT</NavLink>
      {/* <NavLink className="btn btn-outline-primary ms-auto px-4 rounded-pill" to='/login'>
        <i className='fa fa-sign-in me-2'></i> Login</NavLink> */}
        <a href="https://forms.gle/Uk16HEzs9X6k1kpA9" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill"> <i className='fa fa-user-plus me-2'></i>Register for Techtalks</a>
      {/* <NavLink className="btn btn-outline-primary ms-2 px-4 rounded-pill" to='/register'> */}
        {/* <NavLink className="btn btn-outline-primary ms-2 px-4 rounded-pill" to='/dashboard'>
        <i className='fa fa-sign-in me-2'></i>DashBoard</NavLink>
        <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className='fa fa-sign-out me-2'></i>Logout</NavLink> */}
    </div>
  </div>
</nav>
 </div>
  )
}

export default Navbar
