import React , {useState} from 'react'
import Header from './Header'
import contactimg from '../assets/contact.png'

export default function Contact() {

  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value

    setMsg({...msg, [name]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Store object data into variables
    const {name, email, message} = msg;
    try{
      const res = await fetch('/message',{
        method: 'POST',
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          name, email, message
        })
      })
      if(res.status === 400 || !res){
        window.alert("Message Not Sent . Try Again Later ");
      }else{
        window.alert("Message  Sent.");
        setMsg({
          name: "",
          email: "",
          message: ""
        })
      }
    } catch (error){
      console.log(error)
    }
  }

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
                        <form onSubmit={handleSubmit} method="POST">
                        <div class="mb-3">
  <label for="name" class="form-label">Name</label>
  <input type="text" class="form-control" id="name" placeholder="Harshvardhan " name='name' value={msg.name} onChange={handleChange}/>
  </div>
  <div class="mb-3">
  <label for="email" class="form-label">Email Address</label>
  <input type="email" class="form-control" id="email" placeholder="harshvardhan.20jdai021@jietjodhpur.ac.in " name='email' value={msg.email} onChange={handleChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name='message' value={msg.message} onChange={handleChange}></textarea>
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
