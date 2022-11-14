import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link} from 'react-router-dom'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
    <Wrapper>
      <main>
          <nav>
            <Logo />
          </nav>
          <div className='container page'>
            <div className='info'>
              <h1>
                job <span>tracking</span> app
              </h1>
              <p>
              I'm baby wayfarers chicharrones bushwick plaid squid normcore mixtape meh hoodie fanny pack pop-up fashion axe. Etsy mustache food truck viral, fam paleo sriracha Brooklyn sartorial bodega boys shabby chic mixtape readymade man braid chartreuse. Fit marfa disrupt yuccie unicorn austin pok pok quinoa stumptown beard wayfarers. Letterpress affogato pour-over franzen literally.
              </p>
              <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
          </div>
      </main>
    </Wrapper>
  )
}


  
export default Landing
