import React from 'react'
import BannerImage from '../assets/homeburger.jpg'
import '../styles/About.css'

const About = () => {
  return(
    <div className='about'>
      <div 
        className='aboutTop'
        style={{backgroundImage: `url(${BannerImage})`}}
      ></div>
      <div className='aboutTop'>
        <h1>Hakkımızda</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Integer nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi.
        </p>
      </div>
    </div> 
  ) 
   
  
}

export default About
