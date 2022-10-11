import React from 'react'
import student from '../assets/anupam.jpg'
import talks from '../assets/harsh.jpg'
import ai from '../assets/ankit.jpg'
import Header from './Header'
import Card from './CouncilMemCards'

export default function CouncilMembers() {
  return (
    <div>
        <section id="service">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <Header mainh1 = "Lead of Council" bolder="Council" mainh2 = "Members"/>
                    </div>
                </div>
                <div className="row mt-4">
                        <Card head="Anupam Mishra" para="President" image={student} btn="Explore Now" linking={'https://forms.gle/pJvS5eyrJkz6yGhM7'}/>
                        <Card head="Harshvardhan" para="Secretary" image={talks} btn="Explore Now" linking={'https://forms.gle/pJvS5eyrJkz6yGhM7'}/>
                        <Card head="Ankit Dubey" para="treasurer" image={ai} btn="Explore Now"linking={'https://forms.gle/pJvS5eyrJkz6yGhM7'}/>
                    </div>
                    </div>
        </section>
    </div>
  )
}
