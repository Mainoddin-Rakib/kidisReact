import React from 'react';
import Button from '../../components/Button/Button';
import heroShape from './../../assets/images/animation-shape/hero-shape.png'
import heroShape2 from './../../assets/images/animation-shape/hero-shape-2.png'
import heroShape3 from './../../assets/images/animation-shape/hero-shape-3.png'
import heroShape4 from './../../assets/images/animation-shape/hero-shape-4.png'
import { service } from '../../assets/data/services';
import { opportunitisData } from './../../assets/data/opportunitis';
import { testimonialData } from './../../assets/data/testimonials';
import { programsData } from './../../assets/data/programs';
import { teachersData } from './../../assets/data/teachers';
import About from '../../components/Common/About/About';
import Opportunity from '../../components/Home/Opportunity/Opportunity';
import Testimonial from '../../components/Common/Testimonial/Testimonial';
import Service from './../../components/Home/Service/Service'
import Program from '../../components/Home/Programs/Program';
import Explore from '../../components/Home/Explore/Explore';
import Teacher from '../../components/Home/Teacher/Teacher';
import Gallery from '../../components/Home/Gallery/Gallery';
import Event from '../../components/Home/Event/Event';
import Blog from '../../components/Home/Blog/Blog';



const Home = () => {
    return (
        <>
            <div className="hero-bg">
                <div className="hero-shape-images">
                    <img className='hero-shape hero-shape-1' src={heroShape} alt="" />
                    <img className='hero-shape hero-shape-2' src={heroShape2} alt="" />
                    <img className='hero-shape hero-shape-3' src={heroShape3} alt="" />
                    <img className='hero-shape hero-shape-4' src={heroShape4} alt="" />
                </div>
                <div className="container">
                    <div className="hero-wrapper">
                        <div className="hero-content">
                            <h1>Joyful Journeys <br />
                                at Kindergarten <br /> School</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and
                                typesetting  <br /> industry. Lorem Ipsum has been   the industry's printing</p>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
            <div className="service">
                <Service services={service} />
            </div>

            <div className="about">
                <About />
            </div>

            <Opportunity opportunitis={opportunitisData} />

            <Testimonial testimonials={testimonialData} />

            <Program programs={programsData}/>

            <Explore/>

            <Teacher teachers={teachersData}/>

            <Gallery/>

            <Event/>

            <Blog/>

        </>
    );
};

export default Home;