import React from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'


export default function Card(props) {
  const himage = props.image
  const head = props.head
    const para = props.para
    const btn = props.btn
    const linking = props.linking
    const navigate = useNavigate();
    const pp = `${linking}`;
    const goToContact = () => {
        navigate(pp);
    
    }

  return (
   <div className="col-md-4 mb-4">
    <div class="card p-5 ">
  <img className="card-img-top rounded-pill shadow" src={himage} alt="Card cap"/>
  <div class="card-body text-center">
    <h5 class="card-title mb-3 fs-5 fw-bold">{head}</h5>
    <p class="card-text lead fs-6">{para}</p>
    <button className='btn btn-primary rounded-pill' onClick={() => goToContact()}>{btn}</button>
  </div>
</div>
    </div>
  )
}
