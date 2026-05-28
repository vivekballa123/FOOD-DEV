import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin, setSearchQuery }) => {

  const [menu, setMenu] = useState("menu")
  const [searchOpen, setSearchOpen] = useState(false)

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchToggle = () => {
    setSearchOpen((prev) => {
      if (prev) setSearchQuery("")  // clear query when closing
      return !prev
    })
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className='navbar-right'>
<<<<<<< HEAD
        <div className='navbar-search-container'>
          <img
            src={assets.search_icon}
            alt="search"
            className="search-icon-btn"
            onClick={handleSearchToggle}
          />
          {searchOpen && (
            <div className='navbar-search-input-wrap'>
              <input
                type='text'
                placeholder='Search for dishes...'
                onChange={handleSearchChange}
                autoFocus
                className='navbar-search-input'
              />
            </div>
          )}
=======
        <div class="search-box">
          <input type="text" placeholder="Search..." />
          <img src={assets.search_icon} class="search-icon" alt="search" />
>>>>>>> ca6ed842b6c81b92ddff5a9fea8fa0e39104c170
        </div>
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar
