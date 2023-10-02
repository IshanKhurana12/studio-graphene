import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Product from './Product';
import Contact from './Contact';

import Fresh from './Fresh';
const Nav = () => {
  const [products,setProducts]=useState([]);
useEffect(()=>{
  fetch('https://fakestoreapi.com/products/categories')
  .then((response) => response.json())
  .then((data) => {
    // Set the fetched data to the state variable
    setProducts(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
}, []);
  
  const homeRef=useRef(null);
  const aboutRef=useRef(null);
  const productsRef=useRef(null);
  const contactRef=useRef(null);

  const handlehome=()=>{
    homeRef.current?.scrollIntoView({behavior:'smooth'});
  }
  const handleabout=()=>{
    aboutRef.current?.scrollIntoView({behavior:'smooth'});
  }
  const handleproduct=()=>{
    productsRef.current?.scrollIntoView({behavior:'smooth'});
  }
  const handlecontact=()=>{
    contactRef.current?.scrollIntoView({behavior:'smooth'});
  }
  return (
    <>
    
    <div id='navbar'>
      <div>
      <span id='home' className='typo'>HOME</span>
      </div>
     <div>
      <span id='about'onClick={handleabout} className='typo'>ABOUT</span>
     </div>
     
     <div id='our'>
      <span id='products' onClick={handleproduct} className='typo'>OUR PRODUCTS</span>
      
      <ul>
       
        <div id='productsd'>
          {
            products.map((product,index)=>(
              
              <li key={index} id='lee'>{product}</li>
   
            ))
          }
       
        </div>  
        </ul>
      
    
     </div>
     
     <div>
     <span id='contact' onClick={handlecontact} className='typo'>CONTACT US</span>
     </div>
     
    </div>
    <Fresh />
    <div>
    <Product ref={productsRef}/>
    
    </div>
    <div>
    <Contact ref={contactRef} />
    </div>
   
    </>
  )
}

export default Nav
