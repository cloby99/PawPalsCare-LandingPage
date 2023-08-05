import React from 'react'
import './about.css'

import AboutImage from '../../assets/aboutImg.png'



const About = () => {
  return (
    <section id="about" className='container about'>
      <div className='about__header'>
        <hr />
        <h1>About Us</h1>
        <hr />
      </div>
      
      <div className='about__container'>
        <div className="about__content">

          <h2>What is pawpals Care?</h2>

        
          <div className="about__cards">
            <article className="about__card">
              <p>We are a team of animal lovers who want to make a difference in the lives of stray animals. </p>
            </article>

            <article className="about__cardFilled">
              
              <p>We believe that every animal deserves a loving home and a happy life.  </p>
            </article>

            <article className="about__cardFilled">
              
              <p>We want to help stray animals find their forever families with our app.</p>
            </article>
            <article className="about__card">
              
              <p>We want to help stray animals find their forever families with our app.</p>
            </article>

          </div>

          

        </div>

        <img src={AboutImage} alt="" className='about__image'/>

      </div>



    </section>
  )
}

export default About