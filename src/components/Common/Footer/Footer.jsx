import React from 'react';
import './footer.css'
import footerLogo from '../../../assets/images/footer/footer-logo.png'
import footerImg1 from '../../../assets/images/footer/footer-img1.png'
import footerImg2 from '../../../assets/images/footer/footer-img2.png'
import footerImg3 from '../../../assets/images/footer/footer-img3.png'
import footerImg4 from '../../../assets/images/footer/footer-img4.png'
import footerImg5 from '../../../assets/images/footer/footer-img5.png'
import footerImg6 from '../../../assets/images/footer/footer-img6.png'
import footerBgShape from '../../../assets/images/footer/footer-cart-shape.png'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="footer-cart-wrapper">
                        <img src={footerBgShape} alt="" />
                        <div className="main-footer">
                            <div className="footer-navmenu">
                                <div className="main-footer-left">
                                    <img src={footerLogo} alt="" />
                                    <p>
                                        Flexible classNamees refers to the process of acquiring knowledge or skills  through
                                        the use
                                    </p>

                                    <div className="footer-social-icon">
                                        <a href="">
                                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.42848 9.37651C2.37226 9.37651 1.13543 9.37651 0.573227 9.37651C0.273387 9.37651 0.179688 9.26407 0.179688 8.98297C0.179688 8.23338 0.179688 7.46504 0.179688 6.71544C0.179688 6.4156 0.292127 6.3219 0.573227 6.3219H2.42848C2.42848 6.26568 2.42848 5.17877 2.42848 4.67279C2.42848 3.92319 2.55966 3.21108 2.93446 2.55518C3.328 1.88054 3.8902 1.43078 4.60232 1.16842C5.07082 0.999764 5.53932 0.924805 6.0453 0.924805H7.88181C8.14417 0.924805 8.25661 1.03724 8.25661 1.2996V3.43596C8.25661 3.69831 8.14417 3.81075 7.88181 3.81075C7.37583 3.81075 6.86985 3.81075 6.36388 3.82949C5.8579 3.82949 5.59554 4.07311 5.59554 4.59783C5.5768 5.16003 5.59554 5.70349 5.59554 6.28442H7.76937C8.06921 6.28442 8.18165 6.39686 8.18165 6.6967V8.96423C8.18165 9.26407 8.08795 9.35777 7.76937 9.35777C7.09473 9.35777 5.65176 9.35777 5.59554 9.35777V15.467C5.59554 15.7856 5.50184 15.898 5.16452 15.898C4.37744 15.898 3.6091 15.898 2.82202 15.898C2.54092 15.898 2.42848 15.7856 2.42848 15.5045C2.42848 13.5368 2.42848 9.43273 2.42848 9.37651Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a href="">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.6367 0.0546875H12.5508L8.33984 4.89453L13.3164 11.4297H9.43359L6.37109 7.46484L2.89844 11.4297H0.957031L5.46875 6.28906L0.710938 0.0546875H4.70312L7.4375 3.69141L10.6367 0.0546875ZM9.95312 10.2812H11.0195L4.12891 1.14844H2.98047L9.95312 10.2812Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a href="">
                                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.0117 2.16016C15.3398 3.30859 15.3398 5.76953 15.3398 5.76953C15.3398 5.76953 15.3398 8.20312 15.0117 9.37891C14.8477 10.0352 14.3281 10.5273 13.6992 10.6914C12.5234 10.9922 7.875 10.9922 7.875 10.9922C7.875 10.9922 3.19922 10.9922 2.02344 10.6914C1.39453 10.5273 0.875 10.0352 0.710938 9.37891C0.382812 8.20312 0.382812 5.76953 0.382812 5.76953C0.382812 5.76953 0.382812 3.30859 0.710938 2.16016C0.875 1.50391 1.39453 0.984375 2.02344 0.820312C3.19922 0.492188 7.875 0.492188 7.875 0.492188C7.875 0.492188 12.5234 0.492188 13.6992 0.820312C14.3281 0.984375 14.8477 1.50391 15.0117 2.16016ZM6.34375 7.98438L10.2266 5.76953L6.34375 3.55469V7.98438Z"
                                                    fill="currentColor" />
                                            </svg>


                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="footer-navmenu">
                                <div className="footer-navmenu-title">
                                    <h3>Links</h3>
                                </div>
                                <ul>
                                    <li><a href="">Online classNamees</a></li>
                                    <li><a href="">Programs</a></li>
                                    <li><a href="">Admissions</a></li>
                                    <li><a href="">Outdoor Games</a></li>
                                    <li><a href="">Appointment</a></li>
                                </ul>
                            </div>
                            <div className="footer-navmenu">
                                <div className="footer-navmenu-title">
                                    <h3>Explore</h3>
                                </div>
                                <ul>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Our Blog</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Help</a></li>
                                </ul>
                            </div>
                            <div className="footer-navmenu">
                                <div className="footer-navmenu-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <ul>
                                    <li><a href="">4140 Parker Rd. Mexico 31134</a></li>
                                    <li><a href="">info@example.com</a></li>
                                    <li><a href="">(217) 555-0113</a></li>
                                </ul>
                            </div>
                            <div className="footer-navmenu">
                                <div className="footer-navmenu-title">
                                    <h3>Media Gallery</h3>
                                </div>
                                <div className="footer-gallary">
                                    <div className="footer-gallary-img">
                                        <img src={footerImg1} alt="" />
                                    </div>
                                    <div className="footer-gallary-img">
                                        <img src={footerImg2} alt="" />                                                    </div>
                                    <div className="footer-gallary-img">
                                        <img src={footerImg3} alt="" />                                                    </div>
                                    <div className="footer-gallary-img">
                                        <img src={footerImg4} alt="" />                                                    </div>
                                    <div className="footer-gallary-img">
                                        <img src={footerImg5} alt="" />                                                    </div>
                                    <div className="footer-gallary-img">
                                        <img src={footerImg6} alt="" />                                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p> @ All copywrite by company.com</p>
                </div>
            </section>
        </>
    );
};

export default Footer;