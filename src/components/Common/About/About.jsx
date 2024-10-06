import React from 'react';
import about1 from '../../../assets/images/about/about-1.jpg'
import about2 from '../../../assets/images/about/about-2.png'
import about3 from '../../../assets/images/about/about-3.png'
import about4 from '../../../assets/images/about/about-4.png'






const About = () => {
    return (

        <div className="container">
            <div className="about-wrapper">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-image">
                            <div className="about-image-one">
                                <img src={about1} alt="" />
                                <div className="about-image-two">
                                    <img src={about4} alt="" />
                                </div>
                                <div className="cercle-experience">
                                    <h2>30+</h2>
                                    <h3>Experience</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="about-title">
                                <h4>
                                    <a href=""><svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.65547 14C1.55171 12.8288 1.36114 11.3375 2.65547 7.67568C3.89736 4.16216 1.41391 1.7027 1 1"
                                            stroke="#F7593A" />
                                        <path
                                            d="M7.65547 14C6.55171 12.8288 6.36114 11.3375 7.65547 7.67568C8.89736 4.16216 6.41391 1.7027 6 1"
                                            stroke="#F7593A" />
                                    </svg>
                                    </a>
                                    About Us
                                </h4>
                                <h2>It's Our Passion to Work with<span> Children at Kindergarten.</span></h2>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="about-shape-items">
                                <div className="about-shape-item-1">
                                    <img src={about2} alt="" />
                                    <div className="about-shape-item-desc primary">
                                        <h4>Play to Learn</h4>
                                        <p>Lorem ipsum dolor sited amet consectetur notted.</p>
                                    </div>
                                </div>
                                <div className="about-shape-item-1">
                                    <img src={about3} alt="" />
                                    <div className="about-shape-item-desc">
                                        <h4>Quality Educators</h4>
                                        <p>Lorem ipsum dolor sited amet consectetur notted.</p>
                                    </div>
                                </div>
                            </div>
                            <ul className="about-content-lists">
                                <li>
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 0C4.03759 0 0 4.03759 0 9C0 13.9624 4.03759 18 9 18C13.9624 18 18 13.9624 18 9C18 4.03759 13.9624 0 9 0ZM14.0301 6.63158L8.2782 12.3383C7.93985 12.6767 7.3985 12.6992 7.03759 12.3609L3.99248 9.58647C3.63158 9.24812 3.60902 8.68421 3.92481 8.32331C4.26316 7.96241 4.82707 7.93985 5.18797 8.2782L7.6015 10.4887L12.7444 5.34586C13.1053 4.98496 13.6692 4.98496 14.0301 5.34586C14.391 5.70677 14.391 6.27068 14.0301 6.63158Z"
                                                fill="#F25334" />
                                        </svg>
                                    </span>
                                    Exploring the Abundance of Kindergarten Moments
                                </li>
                                <li>
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 0C4.03759 0 0 4.03759 0 9C0 13.9624 4.03759 18 9 18C13.9624 18 18 13.9624 18 9C18 4.03759 13.9624 0 9 0ZM14.0301 6.63158L8.2782 12.3383C7.93985 12.6767 7.3985 12.6992 7.03759 12.3609L3.99248 9.58647C3.63158 9.24812 3.60902 8.68421 3.92481 8.32331C4.26316 7.96241 4.82707 7.93985 5.18797 8.2782L7.6015 10.4887L12.7444 5.34586C13.1053 4.98496 13.6692 4.98496 14.0301 5.34586C14.391 5.70677 14.391 6.27068 14.0301 6.63158Z"
                                                fill="#F25334" />
                                        </svg>
                                    </span>
                                    PageMaker including versions of Lorem Ipsum
                                </li>
                            </ul>
                            <a href="" className='about-btn'>Get Started </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;