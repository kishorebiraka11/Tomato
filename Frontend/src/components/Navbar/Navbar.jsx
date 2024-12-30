import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import Image from '../../GlobalComponents/Image'
import { menuListItems } from './config'
import Button from '../../GlobalComponents/Button'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Image imgSrc={assets.logo} altText={"website-logo"} className="logo" />
        <ul className='navbar-menu'>
            {
                menuListItems?.map((each, index) => (
                    <li key={`navbar-menu-item-${index}-${index+1}`}>{each?.text}</li>
                ))
            }
        </ul>
        <div className='navbar-right'>
            <Image imgSrc={assets.search_icon} altText={"navbar-search-icon-element"} />
            <div className='navbar-search-icon'>
                <Image imgSrc={assets.basket_icon} altText={"basket-icon"}/>
                <div className='dot'></div>
            </div>
            <Button buttonText={"sign in"} className={"button"}/>
             
        </div>
      
    </div>
  )
}

export default Navbar
