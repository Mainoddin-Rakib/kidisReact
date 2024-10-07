import React from 'react';
import teacherShape1 from './../../../assets/images/animation-shape/teacher-shape1.png'
import teacherShape2 from './../../../assets/images/animation-shape/teacher-shape2.png'
import teacherShape3 from './../../../assets/images/animation-shape/teacher-shape3.png'
import teacherShape4 from './../../../assets/images/animation-shape/teacher-shape4.png'
import teacherShape5 from './../../../assets/images/animation-shape/teacher-shape5.png'
import teacherShape6 from './../../../assets/images/animation-shape/teacher-shape6.png'

const Teacher = ({ teachers }) => {
    return (
        <>
            <section className="teacher">
                <div className="teacher-shape-slider">
                    <img className="teacher-shape teacher-shape1" src={teacherShape1} alt="" />
                    <img className="teacher-shape teacher-shape2" src={teacherShape2} alt="" />
                    <img className="teacher-shape teacher-shape3" src={teacherShape3} alt="" />
                    <img className="teacher-shape teacher-shape4" src={teacherShape4} alt="" />
                    <img className="teacher-shape teacher-shape5" src={teacherShape5} alt="" />
                    <img className="teacher-shape teacher-shape6" src={teacherShape6} alt="" />
                </div>
                <div className="container">
                    <div className="section-title teacher-heading-title">
                        <h4 className="teacher-title">
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
                            Teacher</h4>
                        <h2 className="teacher-hadding">Meet Our Expert & <br /> Smart Superheroes!</h2>
                    </div>
                    <div className="row">
                        {
                            teachers?.map((teacher, index) => (
                                <div className="col-lg-4 col-md-12" key={index}>
                                    <div className="teacher-cart">
                                        <div className="teacher-details">
                                            <div className="teacher-img">
                                                <img src={teacher?.image} alt="" />
                                            </div>
                                            <div className="teacher-intro">
                                                <h3>{teacher?.name}</h3>
                                                <p>Teacher</p>
                                                <div className="teacher-social">
                                                    <a href="">
                                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.44791 8.109C2.39982 8.109 1.34183 8.109 0.860926 8.109C0.604443 8.109 0.524292 8.01282 0.524292 7.77237C0.524292 7.13116 0.524292 6.47392 0.524292 5.83272C0.524292 5.57623 0.620473 5.49608 0.860926 5.49608H2.44791C2.44791 5.44799 2.44791 4.51824 2.44791 4.08543C2.44791 3.44422 2.56012 2.83508 2.88073 2.27402C3.21736 1.69693 3.69827 1.31221 4.30741 1.08779C4.70817 0.943515 5.10892 0.879395 5.54174 0.879395H7.11269C7.33711 0.879395 7.4333 0.975576 7.4333 1.2V3.02744C7.4333 3.25186 7.33711 3.34804 7.11269 3.34804C6.67988 3.34804 6.24706 3.34804 5.81425 3.36407C5.38143 3.36407 5.15701 3.57246 5.15701 4.02131C5.14098 4.50221 5.15701 4.96709 5.15701 5.46402H7.01651C7.27299 5.46402 7.36917 5.5602 7.36917 5.81669V7.75634C7.36917 8.01282 7.28902 8.09297 7.01651 8.09297C6.43942 8.09297 5.2051 8.09297 5.15701 8.09297V13.3188C5.15701 13.5913 5.07686 13.6875 4.78832 13.6875C4.11505 13.6875 3.45781 13.6875 2.78455 13.6875C2.54409 13.6875 2.44791 13.5913 2.44791 13.3509C2.44791 11.6677 2.44791 8.15709 2.44791 8.109Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </a>
                                                    <a href="">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.24523 0.879395C1.43103 0.879395 0.898682 1.41404 0.898682 2.11677C0.898682 2.80397 1.41517 3.35387 2.21399 3.35387H2.22944C3.05957 3.35387 3.5762 2.80397 3.5762 2.11677C3.56068 1.41404 3.05957 0.879395 2.24523 0.879395Z"
                                                                fill="currentColor" />
                                                            <path d="M1.03955 4.33154H3.41982V11.4927H1.03955V4.33154Z"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M9.26213 4.16406C7.97807 4.16406 7.11703 5.37067 7.11703 5.37067V4.33214H4.73669V11.4933H7.1169V7.49422C7.1169 7.28013 7.13241 7.06637 7.19531 6.91328C7.36738 6.48578 7.75896 6.04289 8.41655 6.04289C9.27786 6.04289 9.62234 6.6996 9.62234 7.66229V11.4933H12.0024V7.3872C12.0024 5.18761 10.8281 4.16406 9.26213 4.16406Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </a>
                                                    <a href="">
                                                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M3.97203 10.7234C8.44168 10.7234 10.8859 6.92651 10.8859 3.63408C10.8859 3.52624 10.8838 3.41885 10.8791 3.31205C11.3535 2.96031 11.7658 2.52138 12.0912 2.02177C11.6558 2.22029 11.1872 2.35375 10.6957 2.41413C11.1974 2.10555 11.5826 1.6176 11.7642 1.03592C11.2947 1.32134 10.7748 1.5287 10.2212 1.64069C9.77782 1.15639 9.14644 0.853516 8.44741 0.853516C7.10555 0.853516 6.01727 1.96934 6.01727 3.3448C6.01727 3.54043 6.03864 3.73056 6.08029 3.91296C4.06069 3.80876 2.26976 2.81734 1.07139 1.30968C0.862784 1.67783 0.742404 2.10562 0.742404 2.56208C0.742404 3.42642 1.17141 4.18969 1.82373 4.63605C1.42507 4.62349 1.0506 4.51127 0.72321 4.32449C0.722847 4.33496 0.722847 4.34513 0.722847 4.35627C0.722847 5.563 1.56044 6.57054 2.67248 6.79884C2.46822 6.8558 2.25332 6.88648 2.03168 6.88648C1.87537 6.88648 1.72298 6.87073 1.57493 6.84154C1.88428 7.83155 2.78141 8.55196 3.84499 8.57216C3.01326 9.24059 1.96555 9.63874 0.826858 9.63874C0.631005 9.63874 0.437396 9.62723 0.247192 9.60421C1.32265 10.311 2.59968 10.7235 3.97211 10.7235"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Teacher;