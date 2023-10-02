import React from 'react'
import actor from './assets/actor.png'
import line2 from './assets/Line2.png'
import star2 from './assets/Star2.png'
import star from './assets/astar.png'
import { forwardRef } from 'react'
const Mobilehome = (props,ref) => {
  return (
    <div ref={ref}>
      <div id='mobileactor'>
        <img src={actor} alt="actor" />
      </div>
      <div id='mobilestar'>
        <img src={star} alt="str" />
      </div>
      <div id='orange2'>
      </div>
      <div id='mobilehead'>
      <h1>
            Fresh
        </h1>
        <h1 id='year2'>
            2022
        </h1>
        <h1 id=''>
            Look
        </h1>
      </div>
      <div id='l2'>
        <img src={line2} alt="l2" />
      </div>
      <div id='sr'>
        <img src={star2} alt="sr" />
      </div>
      <div id='seemore'>
        <span>See more ↗︎</span>
      </div>
    </div>
  )
}

export default forwardRef(Mobilehome)
