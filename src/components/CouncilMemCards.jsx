import React from 'react'
import { Navigate } from 'react-router-dom'
import './councilcards.css'

export default function CouncilMemCards(props) {
    const himage = props.image
    const head = props.head
    const para = props.para
    const btn = props.btn
    const linking = props.linking

    function handleClick() {
      <Navigate to="/Students" replace={true} />
    }

  return (
   <div className="col-md-4 mb-4">
    <div class="card p-5 ">
  <img className="card-img-top imagecouncil shadow" src={himage} alt="Card cap"/>
  <div class="card-body text-center">
    <h5 class="card-title mb-3 fs-5 fw-bold">{head}</h5>
    <p class="card-text lead fs-6">{para}</p>
    <a href={linking} target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill" onClick={handleClick}>{btn}</a>
  </div>
</div>
    </div>
  )
}