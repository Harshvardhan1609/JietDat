import React from 'react'
// import image from '../assets/talks3.png'
// import image1 from '../assets/talks1.png'
// import image2 from '../assets/talks2.png'
import Header from './Header'
// import Card from './image'
// import TalksSomething from './TalksSomething'

export default function Event() {
  return (
    <div id='event'>
        <section class="studentcouncils5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white mt-5">
                        SUPER SIXER LEAGUE
                        </h1>
                        <p className='lead text-center fs-4 mb-5 text-white mt-5'>
                         Get all the information about Competition and rules here 🏏
                        </p>
                        <div className="buttons d-flex justify-content-center mt-5">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCRWmqvNJJIuEg8hwNG-Ls_0ti_iHbVDeJ3EPkf9u3A6RHLg/viewform" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill navib disabled"> <i className='fa fa-user-plus me-2'></i>Registration Opening Soon</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <div className="container my-2 py-4">
            <div className="row">
                    <Header mainh1 = "About" bolder="Super Sixer League" mainh2 = ""/>
        <p className='lead mb-1 pt-10 text-center'>
        Elite Cricket Competition Organized by the Student Council of JDAT Specially for sports and cricket enthusiasts and this will provide you the platform for boosting your sports power in front of entire JGI.
        </p>
    </div>

    <div className="container my-2 py-4">
            <div className="row">
                    <Header mainh1 = "RULES" bolder="SSL 2K22" mainh2 = ""/>
    <div className="col mr-9 ml-9">
        <p className='lead mb-1 pt-10 '>
    <li>
        Each team will be playing with 11 players.
    </li>
    <li>Umpire decision will be final decision.</li>
    <li>No side arm, no rapid.</li>
    <li>Each player should play only from one team.</li>
    <li>If any team argues with umpire or organizer then organizer has all rights to disqualify the team.<b>ASAP!</b>.</li>
    <li>Each innings consists of 10 over's.</li>
    <li>Total 11 player and 1 extra will be allowed from a team.</li>
    <li>Team should be present half & hour before the match.</li>
    <li>Organizer will have all the authority to make changes in tournament schedule.</li>
    <li>Match will be played by Only with 1 ball. If ball will be lost Or damaged then new ball will be used.</li>
    <li>Both Campus students can apply.</li>
    <li>Venue - Football Ground South campus.</li>
    <li>First 21 teams will be allowed.</li>
        </p>
    </div>
    <div className="row">
                    <Header mainh1 = "Teams" bolder="Super Teams" mainh2 = ""/>
        <p className='lead mb-1 pt-10 text-center'>
        Disclosing Soon
        </p>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
