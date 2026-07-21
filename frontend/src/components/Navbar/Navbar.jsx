import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin, searchQuery, setSearchQuery }) => {

  const [menu, setMenu] = useState("menu")
  const [searchOpen, setSearchOpen] = useState(false)
  const searchInputRef = useRef(null)

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus()
    }
  }, [searchOpen])

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
      if (prev) setSearchQuery("")
      return !prev
    })
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate('/')
      setMenu('menu')
      document.getElementById('food-display')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
        <div className='navbar-search-container'>
          <button type='button' className='search-icon-btn' onClick={handleSearchToggle} aria-label='Search dishes'>
            <img src={assets.search_icon} alt="" />
          </button>
          {searchOpen && (
            <div className='navbar-search-input-wrap'>
              <form onSubmit={handleSearchSubmit}>
                <input
                  ref={searchInputRef}
                  className='navbar-search-input'
                  type='text'
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={(e) => e.key === 'Escape' && handleSearchToggle()}
                  placeholder='Search dishes'
                  autoComplete='off'
                />
              </form>
            </div>
          )}
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
