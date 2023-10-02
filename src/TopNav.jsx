import React from 'react'
import './top.css'
import truck from './assets/truck.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'
import instagram from './assets/instagram.png'
const TopNav = () => {
  return (
    <div className='topnav'>
       
        <img src={truck} id='truck' className='topnavimg' alt="truck" />
      
        <span className='topnavfont' id='free'>Free Delivery </span>
       <span className='topnavfont' id='slash'>|</span>
       
        <span className='topnavfont' id='return'>Return Policy</span>
        <span className='topnavfont'id='login'>Login</span>
        <span className='topnavfont'id='follow'>Follow US</span>
        <img src={facebook} id='facebook'  alt="truck" />
        <img src={linkedin} id='linkedin' alt="truck" />
        <img src={twitter} id='twitter' alt="truck" />
        <img src={instagram} id='instagram' alt="truck" />
        
        
   
    </div>
  )
}

export default TopNav
