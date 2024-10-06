import React from 'react';
const Program = ({ programs }) => {
    return (
        <>
            <section className="programs-two">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-lg-6">
                            <div className="programs-two_wrapper-one">
                                <div className="section-title programs-two-heading-title">
                                    <h4 className="">
                                        <a href="">
                                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.65547 14C1.55171 12.8288 1.36114 11.3375 2.65547 7.67568C3.89736 4.16216 1.41391 1.7027 1 1"
                                                    stroke="#F7593A" />
                                                <path
                                                    d="M7.65547 14C6.55171 12.8288 6.36114 11.3375 7.65547 7.67568C8.89736 4.16216 6.41391 1.7027 6 1"
                                                    stroke="#F7593A" />
                                            </svg>
                                        </a>
                                        Programs
                                    </h4>
                                    <h2>Our Goal is to Meet Kids <span>Where They are</span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem
                                        Ipsum
                                        has
                                        been the industry's Lorem Ipsum </p>
                                    <button className="hero-btn">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 px-2">
                            <div className="programs-two_wrapper-two">
                                {
                                    programs?.map((program, index) => (
                                        <div className={`programs-two-item ${program?.class2}`} key={index}>
                                            <img src={program?.image} alt="" />
                                            <div className={`programs-two_contant ${program?.class}`}>
                                                <h3>{program?.title}</h3>
                                                <p>{program?.dsc}</p>
                                            </div>
                                            <p className="baby-year">{program?.babyYearsDsc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Program;