import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/about.png'
import CouncilMembers from './CouncilMembers'

export default function StudentCouncil() {
  return (
    <div>
        <section id="studentcouncil">
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
        <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src={image} alt="About"
                        className='w-75 mt-5' />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">Role of Student Council</h3>
                        <h3 className='display-6 mb-2'>Who <b>we</b> are</h3>
                        <hr className='w-50' />
                        <p className='lead mb-4'>
                        Student councils are councils typically made up of students and exist to represent the students at a college. They organize and coordinate student activities.

In addition to being this, student councils function as a liaison between the teachers, the administration and the students. They have a voice in college policies and can give their opinion on decisions that affect them.
                        </p>
                    </div>
                </div>
            </div>
            <CouncilMembers/>
    </div>
  )
}
