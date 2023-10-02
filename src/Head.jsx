import React from 'react'
import line1 from './assets/line1.png'
const Head = () => {
  return (
    <div>
      <div>
        <span id='headone' className='mrindia'>ShopKart</span>
        <span id='wishlist' className='mrindia'>WISHLIST(0)</span>
        <span id='bag' className='mrindia'>BAG(0)</span>
        <div>
        <img src={line1} id='line1' alt="line1" />
        </div>
        
      </div>
    </div>
  )
}

export default Head
