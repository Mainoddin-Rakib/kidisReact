// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './navber.css'
import LogoImg from '../../../assets/images/Logo.png'
import { PiPhoneCallFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";


const Navber = () => {
    const [navber, setNavber] = useState(false)



    const stickyNavber = () => {
        if (window.scrollY >= 90) {
            setNavber(true)
        } else {
            setNavber(false)
        }
    }

    window.addEventListener('scroll', stickyNavber)


    return (
        <>
            <div className="mobile_menu">
                <div className="topBar">
                    <div className="mobileLogo">
                        <img src={LogoImg} alt="" />
                    </div>
                    <div class="hamburger" onClick="toggleMenu()">
                    <FiAlignRight />
                    </div>
                </div>
                <div className="sidebar">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Programe</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div class="gray-overlay" onClick="toggleMenu()"></div>
            </div>
            <section className={navber ? 'navber sticky' : 'navber'}>
                <div className="nav-menu">
                    <div className="logo">
                        <img src={LogoImg} alt="" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Programe</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="nav-contact">
                    <div className="nav-contact-icon">
                        <PiPhoneCallFill />
                    </div>
                    <div className="nav-contact-number">
                        <span className='nav-contact-title'>Call for Details</span>
                        <span>+92 00 555 667 </span>
                    </div>
                    <div className="nav-contact_social-icon">
                        <div className="nav-social-icon">
                            <FaFacebookF />
                        </div>
                        <div className="nav-social-icon">
                            <FaXTwitter />
                        </div>
                        <div className="nav-social-icon">
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navber;