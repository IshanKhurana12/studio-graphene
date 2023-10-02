import React from 'react'
import actor from './assets/actor.png'
import star from './assets/astar.png'
import line2 from './assets/line2.png'
import star2 from './assets/star2.png'
const Fresh = () => {
  return (
    <div id='maindiv'>
      <h1 id='fresh'>Fresh</h1>
      <h1 id='year'>2022</h1>
      <h1 id='look'>Look</h1>
      <div id='orange'></div>
      <div>

     
      <div id='box'>
        <img src={actor} alt="actor" id='actor' />
      </div>
      <div>
        <img src={star} alt="star1" id='star' />
      </div>
      <div>
        <img src={line2} alt="line" id='line2' />
        <img src={star2} alt="star" id='star2' />
      </div>
      </div>
      <div>
        <span id='see'>See more ↗︎</span>
      </div>
      <div id='jacket'>
        <span>Oregon jacket <br/>$124</span>
      </div>
    </div>
    
  )
}

export default Fresh
