import React, { useState } from 'react'
import { forwardRef } from 'react'
import d from './assets/d.png'

import Button from './assets/Button.png'
const Contact = (props,ref) => {

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validateEmail = (email) => {
      
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return regex.test(email);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newErrors = {};
  
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required.';
      }
  
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required.';
      }
  
      if (!formData.email) {
        newErrors.email = 'Email is required.';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Invalid email address.';
      }
  
      // Add more validation logic and update newErrors as needed
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
       alert("submitted successfully")
        console.log('Form submitted successfully!');
      }
    };
  
  return (
    <div ref={ref} id='contactpage'>

     <div id='news'>
      <h1>Newsletter</h1>
     </div>
     <div id='extra'>
      <p>Get news about articles and updates in your inbox.</p>
     </div>
     <div id='big'>
      <h1>GET <br />IN TOUCH</h1>
     </div>
     <div>
     <form onSubmit={handleSubmit} id='form'>
      <div >
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder='FIRSTNAME'
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder='LASTNAME'
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div id='email'>
        <label>Email:</label>
        <input
        placeholder='EMAIL'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <button type="submit" id='btn'>SEND</button>
    </form>
     </div>
     <div id='copy'>
     Copyright 2022 All Right Reserved By SG
     </div>
    </div>
  )
}

export default forwardRef(Contact)
