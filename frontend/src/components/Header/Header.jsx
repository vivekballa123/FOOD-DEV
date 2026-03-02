import { assets } from '../../assets/assets'
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${assets.header_new})` }}>
      <div className="header-contents">
        <h2>Order your <br/>favorite food here</h2>
        <p>Choose from a diverse menu featuring a delecate array of dishes arafted with the finest ingredients and culinary expertise. Our mission to satify your cravings and elevate your dining experience.one delicious meal at a time.  </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
