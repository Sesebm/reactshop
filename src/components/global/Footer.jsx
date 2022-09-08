import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
  <div className="main">
    <div className="col1">
      <h3 className="heading">
        About the store
      </h3>
      <ul>
        <li>
          <a href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">
            Become a customer
          </a>
        </li>
       
        <li>
          <a href="#">
            FAQ
          </a>
</li>
      </ul>
    </div>

    <div className="col2">
      <h3 className="heading">
      About us
      </h3>
      <div className="languages">
        <a href="#">Contact us</a>
        <a href="#">Return policy</a>
        
      </div>
    </div>

    <div className="col3">
      <h3 className="heading">
        Get in touch
      </h3>
      <div className="social">
        <a href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
    </div>
  </div>

  <p className="terms">
    <a href="#">Terms of purchase</a>
    <a href="#">Security and privacy</a>
    <a href="#">Newsletter</a>
  </p>
</footer>


  )
}

export default Footer