import React from 'react';
import './footer.css'
import footerLogo from '../../../assets/images/footer/footer-logo.png'
import footerImg1 from '../../../assets/images/footer/footer-img1.png'
import footerImg2 from '../../../assets/images/footer/footer-img2.png'
import footerImg3 from '../../../assets/images/footer/footer-img3.png'
import footerImg4 from '../../../assets/images/footer/footer-img4.png'
import footerImg5 from '../../../assets/images/footer/footer-img5.png'
import footerImg6 from '../../../assets/images/footer/footer-img6.png'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="footer-cart-wrapper">
                        <div className="main-footer">
                            <div className="main-footer-left">
                                <img src={footerLogo} alt="" />
                                <p>
                                    Flexible classNamees refers to the process <br /> of acquiring knowledge or skills <br /> through
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
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.44527 0.924805C1.49343 0.924805 0.871094 1.54983 0.871094 2.37134C0.871094 3.17471 1.47489 3.81756 2.40875 3.81756H2.42681C3.39727 3.81756 4.00122 3.17471 4.00122 2.37134C3.98308 1.54983 3.39727 0.924805 2.44527 0.924805Z"
                                                fill="currentColor" />
                                            <path d="M1.03613 4.96094H3.81877V13.3326H1.03613V4.96094Z" fill="currentColor" />
                                            <path
                                                d="M10.6479 4.76367C9.14673 4.76367 8.14014 6.17424 8.14014 6.17424V4.96016H5.35742V13.3318H8.13998V8.65676C8.13998 8.40648 8.15812 8.15659 8.23165 7.97762C8.43281 7.47785 8.89058 6.9601 9.65933 6.9601C10.6662 6.9601 11.0689 7.72781 11.0689 8.85324V13.3318H13.8513V8.53166C13.8513 5.96025 12.4785 4.76367 10.6479 4.76367Z"
                                                fill="currentColor" />
                                        </svg>

                                    </a>
                                    <a href="">
                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.22559 11.7698C10.4508 11.7698 13.3083 7.33102 13.3083 3.48204C13.3083 3.35597 13.3057 3.23042 13.3002 3.10557C13.8548 2.69437 14.3369 2.18125 14.7172 1.59718C14.2083 1.82926 13.6604 1.98528 13.0859 2.05587C13.6724 1.69512 14.1227 1.12469 14.335 0.444684C13.7862 0.778348 13.1783 1.02076 12.5312 1.15169C12.0128 0.585513 11.2747 0.231445 10.4575 0.231445C8.88881 0.231445 7.61656 1.53589 7.61656 3.14386C7.61656 3.37255 7.64154 3.59482 7.69023 3.80806C5.32924 3.68625 3.23556 2.52724 1.83461 0.764717C1.59075 1.1951 1.45002 1.69521 1.45002 2.22883C1.45002 3.23928 1.95155 4.13157 2.71413 4.65338C2.24808 4.63871 1.81031 4.50751 1.42758 4.28915C1.42715 4.30139 1.42715 4.31329 1.42715 4.32631C1.42715 5.73703 2.40634 6.91488 3.70635 7.18177C3.46757 7.24837 3.21634 7.28422 2.95723 7.28422C2.7745 7.28422 2.59635 7.26582 2.42327 7.2317C2.78492 8.38906 3.83371 9.23125 5.07707 9.25486C4.10475 10.0363 2.87993 10.5017 1.54875 10.5017C1.31979 10.5017 1.09345 10.4883 0.871094 10.4614C2.12835 11.2877 3.62126 11.7699 5.22568 11.7699"
                                                fill="currentColor" />
                                        </svg>
                                    </a>
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