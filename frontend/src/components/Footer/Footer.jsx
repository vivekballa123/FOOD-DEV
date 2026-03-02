import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} className='logo-image' alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, dolor a. Aliquam libero quis, accusamus soluta vel ex nemo atque voluptate perspiciatis magnam voluptatem, expedita animi reprehenderit voluptas molestias id.</p>
                <div>
                    <img className="footer-social-icons" src={assets.facebook_icon} alt="" />
                    <img className="footer-social-icons" src={assets.twitter_icon} alt="" />
                    <img className="footer-social-icons" src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+9189374920</li>
                    <li>contactcravique@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
            <p className="footer-copyright">Copyright 2024 Cravique.com - AllRights Reserved.</p>
    </div>
  )
}

export default Footer
