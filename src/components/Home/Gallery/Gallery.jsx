import React from 'react';
import galleryImg1 from '../../../assets/images/gallery/gallery-1.png'
import galleryImg2 from '../../../assets/images/gallery/gallery-2.png'
import galleryImg3 from '../../../assets/images/gallery/gallery-3.png'
import galleryImg5 from '../../../assets/images/gallery/gallery-5.png'

const Gallery = () => {
    return (
        <>
            <section className="gallery-two">
                <div className="gallery-two-wrapper">
                    <div className="gallery-two-images">
                        <div className="gallery-two-img">
                            <a href="">
                                <img src={galleryImg1} alt="" />
                                <div className="gallery-two-img-overlay gallery-two-overlaytop">+</div>
                            </a>
                        </div>
                        <div className="gallery-two-img">
                            <a href="">
                                <img src={galleryImg2} alt="" />
                                <div className="gallery-two-img-overlay gallery-two-overlaytop">+</div>
                            </a>
                        </div>
                        <div className="gallery-two-img">
                            <a href="">
                                <img src={galleryImg3} alt="" />
                                <div className="gallery-two-img-overlay gallery-two-overlaytop">+</div>
                            </a>
                        </div>
                        <div className="gallery-two-img">
                            <a href="">
                                <img src={galleryImg5} alt="" />
                                <div className="gallery-two-img-overlay gallery-two-overlaytop">+</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;