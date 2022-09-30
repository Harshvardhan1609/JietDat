import React from 'react'
import './card.css'

export default function Card(props) {
    const image = props.image
    const head = props.head
    const para = props.para
    const btn = props.btn

  return (
   <div className="col-md-4 mb-4">
    <div class="card p-5 ">
  <img className="card-img-top rounded-pill shadow" src={image} alt="Card image cap"/>
  <div class="card-body text-center">
    <h5 class="card-title mb-3 fs-5 fw-bold">{head}</h5>
    <p class="card-text lead fs-6">{para}</p>
    <a href="#" class="btn btn-primary rounded-pill">{btn}</a>
  </div>
</div>
    </div>
  )
}
