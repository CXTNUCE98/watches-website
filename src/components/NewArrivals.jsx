import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import productData from '../assets/fake-data/products'

// import "./styles.css";

import { Pagination } from "swiper";

const NewArrivals = () => {

    
    return (
        <div className="new section container" id="new">
            <h2 className="section__title">
                        New Arrivals
            </h2>
            <div className="new__container">
                <div className="swiper new-swiper">
                    <div className="swiper-wrapper">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                              clickable: true,
                            }}
                            breakpoints={{
                              576: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                              },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {productData.getProducts(5).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="new__card swiper-slide" key={index} >                                    
                                        <span className="new__tag">New</span>
                                                        
                                        <img src={item.img} alt="" className="new__img"/>
                                                        
                                        <div className="new__data">
                                            <h3 className="new__title">{item.name}</h3>
                                            <span className="new__price">${item.price}</span>
                                        </div>
                                                        
                                        <button className="button new__button">ADD TO CART</button>                                    
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewArrivals
