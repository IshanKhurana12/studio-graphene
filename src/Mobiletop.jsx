import React from 'react'
import truck from './assets/truck.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'
import instagram from './assets/instagram.png'
const Mobiletop = () => {
  return (
    <div>
      <div id='topnavbar'>
        <div id='mobiletruck'>
            <img src={truck} alt="truck" />
        </div>
        <div id='text1'>
            <span>Free Delivery  &nbsp;|&nbsp; Return Policy
            </span>
        </div>
        <div id='text2'>
            <span >Login</span>
        </div>
        <div id='icon'>
            <img src={facebook} alt="f" />
        </div>
        <div id='icon'>
            <img src={linkedin} alt="l" />
        </div>
        <div id='icon'>
            <img src={twitter} alt="t" />
        </div>
        <div id='icon'>
            <img src={instagram} alt="i" />
        </div>
      </div>

    </div>
  )
}

export default Mobiletop
