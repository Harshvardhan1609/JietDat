import React from 'react'
import image from '../assets/n11.png'
import image1 from '../assets/n22.png'
import image2 from '../assets/n33.png'
import Header from './Header'
import Card from './image'
import student from '../assets/np1.png'
import talks from '../assets/np1.png'
import ai from '../assets/np1.png'
import Cards from './Exploretalks'

export default function Newsletter() {
  return (
    <div id='techtalks'>
        <section class="studentcouncils4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white mt-5">
                            PETRICHOR
                        </h1>
                        <p className='lead text-center fs-4 mb-5 text-white mt-5'>
                            Explore the creativity and voice of the department through our mystic creation
                        </p>
                        <div className="buttons d-flex justify-content-center mt-5">
                        <a href="https://forms.gle/HjcwhHHWjZQrxTbM9" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill navib"> <i className='fa fa-user-plus me-2'></i>Submit your creativity</a>
                        </div>
                        <div className="buttons d-flex justify-content-center ">
                        <a href="https://drive.google.com/file/d/1rs0af65_wlaCAQKimOLZ-7FU45XdmOMD/view?usp=sharing" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill navib">Download latest Newsletter</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <div className="container my-2 py-4">
            <div className="row">
                    <Header mainh1 = "About" bolder="Newsletter" mainh2 = ""/>
    <div className="col mr-9 ml-9">
        <p className='lead mb-1 pt-10 text-center'>
        A newsletter can be used for managing a database of information about people, courses, classes and events. It can also serve as a collaborative space for the college’s community members to share their thoughts and feelings.

A newsletter is an important tool for colleges because they serve as a way to promote upcoming events, highlight interesting research and publications of faculty members and allow students to post opinions on various topics.
        </p>
        <div className="row mt-4">
                        <Card image={image} />
                        <Card image={image1}/>
                        <Card image={image2} />
                    </div>
                </div>
        </div>
        <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <Header mainh1 = "Explore Previous Newsletters" bolder="Previous" mainh2 = "Letters"/>
                    </div>
                </div>
                <div className="row mt-4">
                        <Cards head="August 2022" para="Petrichor" image={student} btn="Download" linking={'https://drive.google.com/file/d/1zLGU8LOUBUOEX7x0nI_DtTeek81vggQO/view?usp=sharing'}/>
                        <Cards head="Septembar 2022" para="Petrichor" image={talks} btn="Download" linking={'https://drive.google.com/file/d/1rs0af65_wlaCAQKimOLZ-7FU45XdmOMD/view?usp=sharing'}/>
                        <Cards head="Octobar 2022" para="Petrichor" image={ai} btn="Comming Soon"linking={'/newsletter'}/>
                    </div>
                    </div>
    </div>
    </div>
  )
}
