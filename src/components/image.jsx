import React from 'react'
import './images.css'

export default function Image(props) {
    const himage = props.image
    // const head = props.head
    // const para = props.para
    // const btn = props.btn
    // const linking = props.linking

  return (
   <div className="col">
    <div class=" p-3 ">
  <img className="card-img-top rounded-pill shadow" src={himage} alt="Card cap"/>
    {/* <a href={linking} target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill">{btn}</a> */}
  </div>
</div>
  )
}