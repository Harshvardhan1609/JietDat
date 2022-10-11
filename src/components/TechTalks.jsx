import React from 'react'
import image from '../assets/talks3.png'
import image1 from '../assets/talks1.png'
import image2 from '../assets/talks2.png'
import Header from './Header'
import Card from './image'
import TalksSomething from './TalksSomething'

export default function TechTalks() {
  return (
    <div id='techtalks'>
        <section class="studentcouncils2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white mt-5">
                            TECH TALKS 
                        </h1>
                        <p className='lead text-center fs-4 mb-5 text-white mt-5'>
                            Explore the era of mistic technology in 2022
                        </p>
                        <div className="buttons d-flex justify-content-center mt-5">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCRWmqvNJJIuEg8hwNG-Ls_0ti_iHbVDeJ3EPkf9u3A6RHLg/viewform" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill navib"> <i className='fa fa-user-plus me-2'></i>Apply for Tech Talks</a>
                        </div>
                        <div className="buttons d-flex justify-content-center ">
                        <a href="https://docs.google.com/presentation/d/1JyUSxtDalBRwjUCNWeV7mgPpEBPFLTPI/edit?usp=sharing&ouid=109102934801266515562&rtpof=true&sd=true" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill navib">Download Presentation Templates</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <div className="container my-2 py-4">
            <div className="row">
                    <Header mainh1 = "About" bolder="Tech Talks" mainh2 = ""/>
    <div className="col mr-9 ml-9">
        <p className='lead mb-1 pt-10 text-center'>
        Tech talks are a way to share what you know about a certain topic with the world. It's also an excellent way to learn and grow as a developer, designer, or entrepreneur.

They not only provide inspiration and knowledge but might also get you your next job opportunity or workshop.
        </p>
        <div className="row mt-4">
                        <Card image={image} />
                        <Card image={image1}/>
                        <Card image={image2} />
                    </div>
                </div>
        </div>
            <TalksSomething />
    </div>
    </div>
  )
}
