import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>User Research</p>
            </li> */}

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information Architecture</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interaction Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability Testing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive and Mobile Design</p>
            </li>

            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaboration and Communication</p>
            </li> */}
          
          </ul>

          
        </article>

        {/* --------------------------------------------- */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-End Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-End Development</p>
            </li>

            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Management Systems (CMS)</p>
            </li> */}

            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Maintenance and Support</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design and Mobile Optimization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Optimization and SEO</p>
            </li>
          
          </ul>

          
        </article>

      {/* --------------------------------------------- */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blog and Article Writing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Content Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Strategy and Planning</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Branding and Messaging</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Optimization for SEO</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Localization</p>
            </li>

            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive and Mobile Design: Adapting the design to different devices and screen sizes, ensuring a seamless user experience across desktop, mobile, and tablet devices.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaboration and Communication</p>
            </li> */}
          
          </ul>

          
        </article>
      </div>
    </section>
  )
}

export default Services