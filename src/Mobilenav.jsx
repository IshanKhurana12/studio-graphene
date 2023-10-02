import React, { useRef, useState } from 'react'
import Mobilehome from './Mobilehome'
import line1 from './assets/line1.png'
import Product from './Product'
import Contact from './Contact'

const Mobilenav = () => {
  const productsRef=useRef(null);
  const contactRef=useRef(null);
  const homeRef=useRef(null);
  const handlehome=()=>{
    homeRef.current?.scrollIntoView({behavior:'smooth'});
  }
  const handleproduct=()=>{
    productsRef.current?.scrollIntoView({behavior:'smooth'});
  }
  const handlecontact=()=>{
    contactRef.current?.scrollIntoView({behavior:'smooth'});
  }
  return (
    <div>
     
     <div class="pos-f-t">
  <nav class="navbar navbar-dark bg-black">
  <h1 class="navbar-heading">ShopKart</h1> 
    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-black p-4 d-flex flex-column justify-content-between">
      <h4 class="text-white" onClick={handlehome}>HOME</h4>
      <h4 class="text-white">ABOUT</h4>
      <h4 class="text-white" onClick={handleproduct}>OUR PRODUCTS</h4>
      <h4 class="text-white" onClick={handlecontact}>CONTACT US</h4>
    </div>
  </div>
</div>
<div id='linee'>
  <img src={line1} alt="l1" />
</div>


    <Mobilehome ref={homeRef} />
    <Product ref={productsRef}/>
    <Contact ref={contactRef}/>
    </div>
  )
}

export default Mobilenav
