import React from 'react';
import exploreImg from '../../../assets/images/Explore/exploring-img.png'

const Explore = () => {
    return (
        <>
            <section className="explore-two">
                <div className="container">
                    <div className="explore-wrapper">
                        <div className="explore-img">
                            <img src={exploreImg}  alt="" />
                            <a href="">
                                <svg width="195" height="195" viewBox="0 0 195 195" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="97.1491" cy="97.5886" r="54.603" transform="rotate(120 97.1491 97.5886)"
                                        fill="white" fill-opacity="0.6" />
                                    <circle cx="97.1483" cy="97.5887" r="70.5981" transform="rotate(120 97.1483 97.5887)"
                                        stroke="white" stroke-opacity="0.6" stroke-width="1.05351" />
                                    <path d="M88.3408 112.843L88.3408 82.333L114.763 97.588L88.3408 112.843Z" fill="#F7593A" />
                                </svg>

                            </a>
                        </div>
                        <div className="explore-contant">
                            <h2> Exploring Our School's Wonders Through a Captivating Video Tour</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Explore;