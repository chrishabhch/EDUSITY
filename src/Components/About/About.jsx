import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="..." className='about-img'/>
        <img src={play_icon} alt="..." className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>
            About University
        </h3>
        <h2>
            Nuturing Tomorrow's Leaders Today
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil repudiandae cum odit commodi autem, alias sapiente corporis perferendis eum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate, doloribus facere deserunt necessitatibus iusto. Ipsa est eligendi quibusdam temporibus?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio beatae laudantium nostrum, veniam molestiae impedit reiciendis molestias praesentium non provident!</p>
      </div>
    </div>
  )
}

export default About
