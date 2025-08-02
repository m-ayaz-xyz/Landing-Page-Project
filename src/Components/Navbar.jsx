import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="logo">
        <img src="brand_logo.png" alt="logo" />
      </div>
      <div className="navlink">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="navbutton">
        <button>Login</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar