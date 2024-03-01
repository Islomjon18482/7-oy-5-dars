import React from 'react'
import "./index.css"

export default function Footer() {
  return (
    <div className='footer' style={{margin: "0px auto", backgroundColor: "rgb(27, 55, 100)"}}>
      <div className="frist__colum">
        <img src="./Logo.png"/>
      </div>
      <div className="second__colum">
        <h2>Explore</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Appointments</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="second__colum">
        <h2>Utility Pages</h2>
        <ul>
          <li>Start here</li>
          <li>Style guide</li>
          <li>404 not found</li>
          <li>Password protected</li>
          <li>Licenses</li>
          <li>Changelog</li>
        </ul>
      </div>
      <div className="second__colum">
        <h2>Keep in Touch</h2>
        <ul>
          <li>24A Kingston St, Los Vegas NC 28202, USA.</li>
          <li>support@doctors.com</li>
          <li>(+22) 123 - 4567 - 900</li>
        </ul>
      </div>
    </div>
  )
}
