import React from 'react'
import './mission.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data = [
  {
    img: AVTR1,
    description: 'Browse through our profiles of adorable stray animals who are waiting for a home.'
  },
  {
    img: AVTR2,
    description: 'Contact the animal shelters or rescue groups that are taking care of them.'
    
  },
  {
    img: AVTR3,
    description: 'Share your stories, tips, and photos of your adopted pets with other users.'
  },
]

const Mission = () => {
  return (
    <section id="mission" className='container mission'>
      <div className='mission__header'>
        <hr />
        <h1>Mission</h1>
        <hr />
      </div>

      <div className='mission__container'>
        <div className='mission__container-top'>
          <h2>What is pawpals Care do?</h2>
          <p>Our app is more than just a platform for adoption. It is also a community of people who care about animals and want to support each other. </p>
          <p>You can use our app to:</p>

        </div>
        <div className="mission__container-bottom">
          <Swiper 
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{ clickable: true }}
            pagination={{ clickable: true, swipeable: true }}
            
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
              {
                data.map(({img, description}, index) => {
                  return(
                    <SwiperSlide className="mission__card">
                      <div className="card__img">
                        <img src={img}  />
                      </div>
                      
                      <p className='card__description'>{description}</p>
                    </SwiperSlide>
                  )
                })
              }
          </Swiper>
        </div>

      </div>
    </section>
  )
}

export default Mission