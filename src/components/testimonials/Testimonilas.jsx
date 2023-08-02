import React from 'react'
import './testimonilas.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Shehaan Avishka',
    review: 'The website created by the team is absolutely stunning. The design is visually captivating, with a perfect blend of modern aesthetics and functional layout. Navigating through the site is a seamless experience, thanks to the intuitive user interface. The content is engaging, informative, and well-structured, leaving a lasting impression on visitors. It\'s evident that great attention to detail was given in every aspect of the website\'s development. A truly remarkable online presence that showcases the expertise and creativity of the team.'
  },
  {
    avatar: AVTR2,
    name: 'Nirupama Dissanayake',
    review: 'I am thoroughly impressed with the website development. The design is visually striking, with a beautiful combination of colors, typography, and imagery. The user experience is exceptional, with easy navigation and clear call-to-actions. The content is not only informative but also compelling, effectively conveying the brand\'s message and captivating the audience. It\'s evident that a lot of thought and effort went into creating this remarkable website. A standout online platform that sets the bar high in terms of design, functionality, and content.'
  },
  {
    avatar: AVTR3,
    name: 'Shanaka Fernando',
    review: 'The website designed is nothing short of remarkable. The design is aesthetically pleasing, with a modern and clean look that instantly grabs attention. The user experience is smooth and intuitive, ensuring effortless navigation. The content is informative, engaging, and well-presented, making it easy for visitors to find the information they need. The attention to detail in both design and functionality is evident, reflecting the professionalism and expertise of the team. A truly impressive website that leaves a lasting impression.'
  },
  {
    avatar: AVTR4,
    name: 'Hiruni Senarathna',
    review: 'The website developed is a true masterpiece. The design is visually captivating, with an elegant and sophisticated aesthetic that perfectly represents the brand. The user experience is seamless, with intuitive navigation and interactive elements that engage visitors. The content is thoughtfully crafted, delivering valuable information in a compelling and easy-to-digest manner. The attention to detail and commitment to quality shine through every aspect of the website. A top-tier online platform that exceeds expectations and sets the standard for excellence.'
  }
]

const Testimonilas = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true, swipeable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonilas