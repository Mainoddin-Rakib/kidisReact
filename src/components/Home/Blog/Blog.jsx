import React from 'react';
import blogImg1 from './../../../assets/images/blog/blog-page-img.png'
import blogImg2 from './../../../assets/images/blog/blog-page-img2.png'
import blogImg3 from './../../../assets/images/blog/blog-page-img3.png'
import admin1 from './../../../assets/images/blog/admin1.png'
import admin2 from './../../../assets/images/blog/admin2.png'
import admin3 from './../../../assets/images/blog/admin3.png'
import { FaPlus } from "react-icons/fa6";




const Blog = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <div className="section-title blog-heading-title">
                        <h4 className="blog-heading">
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
                            Blog</h4>
                        <h2 className="blog-title">Explore Our Latest Blog <br /> Updates & Articles</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-cart">
                                <div className="blog-img-wrapper">
                                    <div className="blog-img">
                                        <img src={blogImg1} alt="" />
                                        <div className="blog-ovarlay blog-overlaymiddle">
                                            <span> <FaPlus /> </span>
                                        </div>
                                    </div>
                                    <h4 className="blog-date">18<br />Aug</h4>
                                </div>
                                <div className="blog-desc">
                                    <p className="blog-sub-title">Preschool</p>
                                    <div className="blog-title">
                                        <h4>Kindergarten Anniversary</h4>
                                        <a href="">Flexible classNamees refers to the process of acquiring knowledge or skills
                                            through </a>
                                    </div>
                                    <div className="blog-admin">
                                        <div className="admin-img">
                                            <img src={admin1} alt="" />
                                            <div className="admin-intro">
                                                <p className="admin-name">Eleanor Pena</p>
                                                <p className="admin">Admin</p>
                                            </div>
                                        </div>
                                        <div className="blog-icon">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.20478 4.81132L10.1568 4.81132L7.46242 7.50567C7.4138 7.55263 7.37502 7.6088 7.34834 7.6709C7.32167 7.73301 7.30762 7.7998 7.30704 7.86739C7.30645 7.93498 7.31933 8.00201 7.34492 8.06457C7.37052 8.12713 7.40832 8.18397 7.45611 8.23176C7.50391 8.27956 7.56074 8.31736 7.6233 8.34295C7.68586 8.36855 7.75289 8.38143 7.82048 8.38084C7.88807 8.38025 7.95487 8.36621 8.01697 8.33953C8.07908 8.31285 8.13525 8.27407 8.18221 8.22545L11.7455 4.66217C11.8409 4.56671 11.8945 4.43726 11.8945 4.30228C11.8945 4.1673 11.8409 4.03785 11.7455 3.94239L8.18221 0.3791C8.0862 0.286373 7.95762 0.235065 7.82415 0.236225C7.69068 0.237385 7.56301 0.29092 7.46862 0.3853C7.37424 0.479681 7.32071 0.607355 7.31955 0.740823C7.31839 0.874293 7.3697 1.00288 7.46242 1.09888L10.1568 3.79324L1.20478 3.79323C1.06978 3.79323 0.940302 3.84687 0.844838 3.94233C0.749375 4.03779 0.695744 4.16727 0.695744 4.30228C0.695744 4.43728 0.749374 4.56676 0.844838 4.66222C0.940302 4.75768 1.06978 4.81132 1.20478 4.81132Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-cart">
                                <div className="blog-img-wrapper">
                                    <div className="blog-img">
                                        <img src={blogImg2} alt="" />
                                        <div className="blog-ovarlay blog-overlaymiddle">
                                            <span> <FaPlus /> </span>
                                        </div>
                                    </div>
                                    <h4 className="blog-date">18<br />Aug</h4>
                                </div>
                                <div className="blog-desc">
                                    <p className="blog-sub-title">Preschool</p>
                                    <div className="blog-title">
                                        <h4>Kindergarten Anniversary</h4>
                                        <a href="">Flexible classNamees refers to the process of acquiring knowledge or skills
                                            through </a>
                                    </div>
                                    <div className="blog-admin">
                                        <div className="admin-img">
                                            <img src={admin2} alt="" />
                                            <div className="admin-intro">
                                                <p className="admin-name">Eleanor Pena</p>
                                                <p className="admin">Admin</p>
                                            </div>
                                        </div>
                                        <div className="blog-icon">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.20478 4.81132L10.1568 4.81132L7.46242 7.50567C7.4138 7.55263 7.37502 7.6088 7.34834 7.6709C7.32167 7.73301 7.30762 7.7998 7.30704 7.86739C7.30645 7.93498 7.31933 8.00201 7.34492 8.06457C7.37052 8.12713 7.40832 8.18397 7.45611 8.23176C7.50391 8.27956 7.56074 8.31736 7.6233 8.34295C7.68586 8.36855 7.75289 8.38143 7.82048 8.38084C7.88807 8.38025 7.95487 8.36621 8.01697 8.33953C8.07908 8.31285 8.13525 8.27407 8.18221 8.22545L11.7455 4.66217C11.8409 4.56671 11.8945 4.43726 11.8945 4.30228C11.8945 4.1673 11.8409 4.03785 11.7455 3.94239L8.18221 0.3791C8.0862 0.286373 7.95762 0.235065 7.82415 0.236225C7.69068 0.237385 7.56301 0.29092 7.46862 0.3853C7.37424 0.479681 7.32071 0.607355 7.31955 0.740823C7.31839 0.874293 7.3697 1.00288 7.46242 1.09888L10.1568 3.79324L1.20478 3.79323C1.06978 3.79323 0.940302 3.84687 0.844838 3.94233C0.749375 4.03779 0.695744 4.16727 0.695744 4.30228C0.695744 4.43728 0.749374 4.56676 0.844838 4.66222C0.940302 4.75768 1.06978 4.81132 1.20478 4.81132Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-cart">
                                <div className="blog-img-wrapper">
                                    <div className="blog-img">
                                        <img src={blogImg3} alt="" />
                                        <div className="blog-ovarlay blog-overlaymiddle">
                                            <span> <FaPlus /> </span>
                                        </div>
                                    </div>
                                    <h4 className="blog-date">18<br />Aug</h4>
                                </div>
                                <div className="blog-desc">
                                    <p className="blog-sub-title">Preschool</p>
                                    <div className="blog-title">
                                        <h4>Kindergarten Anniversary</h4>
                                        <a href="">Flexible classNamees refers to the process of acquiring knowledge or skills
                                            through </a>
                                    </div>
                                    <div className="blog-admin">
                                        <div className="admin-img">
                                            <img src={admin3} alt="" />
                                            <div className="admin-intro">
                                                <p className="admin-name">Eleanor Pena</p>
                                                <p className="admin">Admin</p>
                                            </div>
                                        </div>
                                        <div className="blog-icon">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.20478 4.81132L10.1568 4.81132L7.46242 7.50567C7.4138 7.55263 7.37502 7.6088 7.34834 7.6709C7.32167 7.73301 7.30762 7.7998 7.30704 7.86739C7.30645 7.93498 7.31933 8.00201 7.34492 8.06457C7.37052 8.12713 7.40832 8.18397 7.45611 8.23176C7.50391 8.27956 7.56074 8.31736 7.6233 8.34295C7.68586 8.36855 7.75289 8.38143 7.82048 8.38084C7.88807 8.38025 7.95487 8.36621 8.01697 8.33953C8.07908 8.31285 8.13525 8.27407 8.18221 8.22545L11.7455 4.66217C11.8409 4.56671 11.8945 4.43726 11.8945 4.30228C11.8945 4.1673 11.8409 4.03785 11.7455 3.94239L8.18221 0.3791C8.0862 0.286373 7.95762 0.235065 7.82415 0.236225C7.69068 0.237385 7.56301 0.29092 7.46862 0.3853C7.37424 0.479681 7.32071 0.607355 7.31955 0.740823C7.31839 0.874293 7.3697 1.00288 7.46242 1.09888L10.1568 3.79324L1.20478 3.79323C1.06978 3.79323 0.940302 3.84687 0.844838 3.94233C0.749375 4.03779 0.695744 4.16727 0.695744 4.30228C0.695744 4.43728 0.749374 4.56676 0.844838 4.66222C0.940302 4.75768 1.06978 4.81132 1.20478 4.81132Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;