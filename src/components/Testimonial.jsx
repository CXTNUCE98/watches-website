import React from 'react'

import { testimonialList } from '../assets/fake-data/testimonial'

import {BiRightArrowAlt, BiLeftArrowAlt} from 'react-icons/bi'

import testimonialImg from '../assets/img/testimonial.png'

const Testimonial = () => {
    return (
        <div className="testimonial section container">
            <div className="testimonial__container grid">
                <div className="swiper testimonial-swiper">
                    <div className="swiper-wrapper">
                        {testimonialList.map((item, index) => (
                            <div className="testimonial__card swiper-slide" key={index}>
                                <div className="testimonial__quote">
                                    <i className='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p className="testimonial__description">
                                        {item.desc}
                                </p>
                                <h3 className="testimonial__date">{item.date}</h3>
            
                                <div className="testimonial__perfil">
                                    <img src={item.imgTest} alt="" className="testimonial__perfil-img"/>
            
                                    <div className="testimonial__perfil-data">
                                        <span className="testimonial__perfil-name">{item.name}</span>
                                        <span className="testimonial__perfil-detail">{item.detail}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                        
                    <div className="swiper-button-next">
                        <BiRightArrowAlt/>
                    </div>
                    <div className="swiper-button-prev">
                       <BiLeftArrowAlt/>
                    </div>
                </div>

                <div className="testimonial__images">
                    <div className="testimonial__square"></div>
                    <img src={testimonialImg} alt="" className="testimonial__img"/>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
