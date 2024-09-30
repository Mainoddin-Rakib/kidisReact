// eslint-disable-next-line no-unused-vars
import React from 'react';
import './navber.css'
import LogoImg from '../../assets/images/Logo.png'
import { PiPhoneCallFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



const Navber = () => {
    return (
        <>
            <section className='navber'>
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
                        <p>Call for Details</p>
                        <span>+92 00 555 667 </span>
                    </div>
                    <hr />
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