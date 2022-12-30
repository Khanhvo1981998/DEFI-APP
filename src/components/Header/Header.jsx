import React, { useState } from 'react'
import "./css/Header.css"
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";


const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () =>
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);



    return (

        <div className="header-container">
            <div className="logo">TOKSWAP</div>
            <div className="menu">
                <div className="menu-links">
                    <ul className=' header-menu'>
                        {/* <li class="current"><a className='menu-link' href="">App</a></li> */}
                        <li><a className='menu-link' href="">App</a></li>
                        <li><a className='menu-link' href="">Products</a></li>
                        <li><a className='menu-link' href="">Build</a></li>
                        <li><a className='menu-link' href="">Careers</a></li>
                        <li><a className='menu-link' href="">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="wallet-btn">
                <button className="primary">Enter-App</button>
            </div>
            <button className="hamburger" onClick={toggleExpanded}>
                <MenuIcon />
            </button>
            {isExpanded && (
                <div className="menu-overlay">
                    <div className="menu-links">
                        <a href="/">App</a>
                        <a href="/">Products</a>
                        <a href="/">Build</a>
                        <a href="/">Careers</a>
                        <a href="/">About</a>
                        <a href="/">Enter App</a>
                    </div>
                </div>
            )}
        </div>


    )
}

export default Header