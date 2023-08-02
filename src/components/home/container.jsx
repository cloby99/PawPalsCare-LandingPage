import React from 'react'
import HOMEIMG from '../../assets/homeImg.svg'

function container() {
  return (
    <div className='home__body__container'>
        <img src={HOMEIMG} alt="" />

        <div className='home__body-right'>
            <div className="home__body-rightTop">
              <h2>
                Find your new best friend Today!
              </h2>
              <div>
                <p>
                  Explore our gallery of cute and  
                </p>
                <p>
                  cuddly stray animals who are ready
                </p>
                <p>
                  to join your family.
                </p>
              </div>
            </div>
            
            <button>Get Started </button>
            
        </div>
    </div>
  )
}

export default container