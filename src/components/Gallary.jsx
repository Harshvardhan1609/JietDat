import React from 'react'
import Header from './Header'
import GallaryCards from './GallaryCards'
import student from '../assets/gallary/student.jfif'
import ideathon from '../assets/gallary/ideathon.jfif'
import Nirman from '../assets/gallary/nirman.jfif'
import sih from '../assets/gallary/sih.jfif'
import sam from '../assets/gallary/sam.jfif'
import placement from '../assets/gallary/placement.jfif'

export default function Gallary() {
  return (
    <div>
    <section id="gallary">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12">
                    <Header mainh1 = "Explore" bolder="Gallery" mainh2 = "Saga"/>
                </div>
            </div>
            <div className="row mt-4">
                <GallaryCards himage={placement} head="Placement"/>
                <GallaryCards himage={student} head="Student Council Interaction"/>
                <GallaryCards himage={ideathon} head="Ideathon"/>
                <GallaryCards himage={Nirman} head="Nirman"/>
                <GallaryCards himage={sam} head="Samvad"/>
                <GallaryCards himage={sih} head="Smart India Hackathon"/>
                </div>
                </div>
    </section>
</div>
  )
}
