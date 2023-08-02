import React from 'react'
import './home.css'
import CONTAINER from './container'

import LOGO from '../../assets/LOGO.svg'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className="home__header">
          <img src={LOGO} alt="" className='logo'/>
        </div>
        <div className='home__body'>

          <h1>Will You Help a Furry Pal Today?</h1>
          
          <CONTAINER />

        </div>

      </div>
    </div>
  )
}

export default Home

// import React from 'react'
// import './header.css'


// const Header = () => {
//   return (
//     <header id='home'>
//       <div className="container header__container">
        

//         <a href="#contact" className="scroll__down">Scroll Down</a>
//       </div>
      
//     </header>
//   )
// }

// export default Header