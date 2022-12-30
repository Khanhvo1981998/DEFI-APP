import React from 'react'
import "./css/HeroSection.css"
import search from "../../assets/icons/search.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg"
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg"
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg"
import { ReactComponent as Discord } from "../../assets/icons/discord.svg"
import hero from "../../assets/hero.svg"


const HeroSection = () => {
    return (
        <div className="hero-section-container">
            <div className="hero-info-wrapper">
                <div className="hero-info-text">
                    <h1>
                        the <span className="highlighted">Decentralized</span>
                    </h1>
                    <p className="hero-info-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </p>
                    <div className="search-container">
                        <div className="search-input-wrapper">
                            <img src={search} alt="search" className="search" />
                            <input type="text" placeholder='Search 5000+ tokens across 9 Chains' className="search-input" />

                        </div>
                        <button className="search-btn primary">
                            <span className="start-swapping">Start Swapping</span>
                        </button>
                    </div>
                    <div className="social-links-container">
                        <div className="social-links">
                            <a href=""> <Telegram /></a>
                            <a href=""> <Twitter /></a>
                            <a href=""> <Youtube /></a>
                            <a href=""> <Discord /></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-image-container">
                <div>
                    <img src={hero} alt="blockchain" className="hero-img" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection