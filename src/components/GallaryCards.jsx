import React from 'react'

export default function GallaryCards(props) {
    const himage = props.himage
    const head = props.head
  return (
    <div className="col-md-4 mb-2">
    <div class="card p-3 ">
  <img className="card-img-top rounded shadow" src={himage} alt="Card cap"/>
  <div class="card-body text-center">
    <h5 class="card-title  fs-5 fw-bold">{head}</h5>
  </div>
</div>
    </div>
  )
}
