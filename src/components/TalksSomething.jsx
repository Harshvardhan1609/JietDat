import React from 'react'
import student from '../assets/mk1.jpg'
import talks from '../assets/mk2.jpg'
import ai from '../assets/mk3.jpg'
import Header from './Header'
import Card from './Exploretalks'

export default function TalksSomething() {
  return (
    <div>
        <section id="service">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <Header mainh1 = "Explore Related Talks" bolder="Tech" mainh2 = "Talks"/>
                    </div>
                </div>
                <div className="row mt-4">
                        <Card head="7 TED Talks on how to improve your presentations" para="Ted Talks" image={student} btn="Explore Now" linking={'https://enterprisersproject.com/article/2018/9/7-ted-talks-how-improve-your-presentations'}/>
                        <Card head="30 Tips To Improve Your Presentation Skills" para="Career Guide" image={talks} btn="Explore Now" linking={'https://www.indeed.com/career-advice/career-development/how-improve-presentation-skills'}/>
                        <Card head="10 Tips To Improve Your Presentation Slides" para="sfmagzine" image={ai} btn="Explore Now"linking={'https://sfmagazine.com/post-entry/may-2019-10-tips-to-improve-your-presentation-slides/'}/>
                    </div>
                    </div>
        </section>
    </div>
  )
}
