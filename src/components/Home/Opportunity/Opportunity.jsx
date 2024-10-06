import React from 'react';
// import opportunityImg1 from './../../../assets/images/oportunity/opportunity1.png'
// import opportunityImg2 from './../../../assets/images/oportunity/opportunity2.png'
// import opportunityImg3 from './../../../assets/images/oportunity/opportunity3.png'
// import opportunityImg4 from './../../../assets/images/oportunity/opportunity4.png'
// import opportunityImg5 from './../../../assets/images/oportunity/opportunity5.png'
// import opportunityImg6 from './../../../assets/images/oportunity/opportunity6.png'



const Opportunity = ({ opportunitis }) => {
    return (
        <>
            <section className="opportunity">
                <div className="container">
                    <div className="section-title opportunity-heading-title">
                        <h4>
                            <a href=""><svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.65547 14C1.55171 12.8288 1.36114 11.3375 2.65547 7.67568C3.89736 4.16216 1.41391 1.7027 1 1"
                                    stroke="currentColor" />
                                <path
                                    d="M7.65547 14C6.55171 12.8288 6.36114 11.3375 7.65547 7.67568C8.89736 4.16216 6.41391 1.7027 6 1"
                                    stroke="currentColor" />
                            </svg>
                            </a>
                            opportunity
                        </h4>
                        <h2>Children are Provided with <br /> an Opportunity <span>Through Us</span></h2>
                    </div>
                    <div className="opportunity-wrapper">
                        <div className="row">
                            {
                                opportunitis?.map((Opportunity, index) => (
                                    <div className="col-lg-4" key={index}>
                                        <div className="oportunity-item">
                                            <div className="oportunity-content">
                                                <div className="oportunity-content-img">
                                                    <img src={Opportunity?.image} alt="" />
                                                </div>
                                                <div className="oportunity-desc">
                                                    <h4>{Opportunity?.title}</h4>
                                                    <p>{Opportunity?.dsc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="funfact-wrapper">
                        <div className="funfact-countdown-items">
                            <div className="funfact-box-1">
                                <div className="funfact-count">
                                    <h2>40k</h2>
                                    <p>Student Enrolled</p>
                                </div>
                            </div>
                            <div className="funfact-box-1 box-2">
                                <div className="funfact-count">
                                    <h2>80%</h2>
                                    <p>Satisfaction Rate</p>
                                </div>
                            </div>
                            <div className="funfact-box-1 box-3">
                                <div className="funfact-count">
                                    <h2>25k</h2>
                                    <p>className Completed</p>
                                </div>
                            </div>
                            <div className="funfact-box-1 box-4">
                                <div className="funfact-count">
                                    <h2>60</h2>
                                    <p>Top Instructors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Opportunity;