import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-light'>
    <div className='container py-5'>
      <div className="row">
        <div className="col-3">
          <img className='mb-3' width={"60%"} src="images/logo.svg" alt="logo" />
          <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
          <p>All rights reserved.</p>
          <div className="row">
            <div className="col-3"><a href="#"><i className="fa-brands fa-x-twitter"></i></a></div>
            <div className="col-3"><a href="#"><i className="fa-brands fa-square-facebook"></i></a></div>
            <div className="col-3"><a href="#"><i className="fa-brands fa-instagram"></i></a></div>
            <div className="col-3"><a href="#"><i className="fa-brands fa-linkedin"></i></a></div>
          </div>
        </div>
        <div className="row col-3">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">About</a>
          <a href="#">About</a>
          <a href="#">About</a>
          <a href="#">About</a>
          <a href="#">About</a>
          <a href="#">About</a>
        </div>
        <div className="row col-3">
          <h3>Support</h3>
          <a href="#">Contact us</a>
          <a href="#">Contact us</a>
          <a href="#">Contact us</a>
          <a href="#">Contact us</a>
          <a href="#">Contact us</a>
          <a href="#">Contact us</a>
        </div>
        <div className="row col-3">
          <h3>Account</h3>
          <a href="#">Open an account</a>
          <a href="#">Fund transfer</a>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer