import React from 'react'
import image from '../assets/council.png'
import image1 from '../assets/d.png'
import image2 from '../assets/209.png'
import CouncilMembers from './CouncilMembers'
import Header from './Header'
import Card from './image'

export default function StudentCouncil() {
  return (
    <div id='studentcouncil"'>
        <section class="studentcouncils">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white mt-5">
                            STUDENT COUNCIL  2022
                        </h1>
                        <p className='lead text-center fs-4 mb-5 text-white mt-5'>
                            Get all the information about the student council and member updates here
                        </p>
                        <div className="buttons d-flex justify-content-center mt-5">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8WD0xFBq6dpQmMKMZpVtibAfo-7pFnUEJC_Gve4uprnKZ-g/viewform?usp=send_form" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill navib"> <i className='fa fa-user-plus me-2'></i>Apply for Suggestions and Complaints</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container my-2 py-4">
            <div className="row">
                    <Header mainh1 = "About" bolder="Student Council" mainh2 = ""/>
    <div className="col mr-9 ml-9">
        <p className='lead mb-1 pt-10 text-center'>
        Student councils are councils typically made up of students and exist to represent the students at a college. They organize and coordinate student activities.

In addition to being this, student councils function as a liaison between the teachers, the administration and the students. They have a voice in college policies and can give their opinion on decisions that affect them.
        </p>
        <div className="row mt-4">
                        <Card image={image} />
                        <Card image={image1}/>
                        <Card image={image2} />
                    </div>
                </div>
        </div>
            <CouncilMembers/>
    </div>
    </div>
  )
}

// <div className="container my-2 py-3 ">
// </div>
// </div>