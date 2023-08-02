import React from 'react'
import './about.css'
import ME from '../../assets/3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>

        <div className='about__me'>
          <img src={ME} alt="" className="about__me-image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Pending...</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Pending...</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Pending...</small>
            </article>

          </div>

          <p>
          I am Anuradha Basnayake, a dedicated and ambitious third-year Computer Science student. I have a passion for technology and a strong desire to make a positive impact in the field. I completed my secondary education at Mahamaya Girls' College in Kandy, Sri Lanka, and I am currently pursuing my undergraduate degree at the University of Colombo School of Computing.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>



    </section>
  )
}

export default About