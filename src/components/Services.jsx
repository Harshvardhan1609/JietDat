import React from 'react'
import student from '../assets/student.png'
import talks from '../assets/talks.jpg'
import ai from '../assets/AI.jpg'
import res1 from '../assets/res1.jpg'
import development from '../assets/development.jpg'
import newsletter from '../assets/newsletter.jpg'
import Header from './Header'
import Card from './Card'

export default function Services() {
  return (
    <div>
        <section id="service">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <Header mainh1 = "Explore" bolder="Technology" mainh2 = "Auora"/>
                    </div>
                </div>
                <div className="row mt-4">
                        <Card head="Student Council" para="Events | Updates | Complaints" image={student} btn="Explore Now"/>
                        <Card head="Tech Talks" para="Auora of Tech" image={talks} btn="Explore Now"/>
                        <Card head="Innovation Center" para="Submit your innovations" image={ai} btn="Explore Now"/>
                        <Card head="Branch Fundamentals" para="Get your astra here" image={res1} btn="Explore Now"/>
                        <Card head="Development Resources" para="Kick start development journey" image={development} btn="Explore Now"/>
                        <Card head="Newsletter" para="View latest newsletter" image={newsletter} btn="Explore Now"/>
                    </div>
                    </div>
        </section>
    </div>
  )
}
