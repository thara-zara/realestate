import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot-body'>
      <div className='f-logo'>
          <div className='img'>
            <img src={logo} alt="img" />
          </div>
          <p>
          58 Howard Street #2 San Francisco contact@grandhome.com 
          </p>
          <p>(+68)1221 09876</p>
          <div className='social'>
              <i className='fab fa-facebook'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-pinterest'></i>
          </div>
      </div>
      <div>
          <div className='header'>
              Quick Links
          </div>
          <div className='list'>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Contact Support</li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
          </div>
      </div>
      <div>
          <div className='header'>
          Popular Searches
          </div>
          <div className='list'>
            <ul>
              <li>Apartment for Rent</li>
              <li>Apartment Low to hide</li>
              <li>Offices for Buy</li>
              <li>Offices for Rent</li>
            </ul>
          </div>
      </div>
      <div>
          <div className='header'>
              Newsletter
          </div>
          <div className='sub'>
            <p>Subscribe to our newsletter.</p>
          </div>
          <div className='mail'>
            <input type="text"  placeholder='@gmail.com'/>
            <button>subscribe</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
