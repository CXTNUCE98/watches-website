import React from 'react'

import productData from '../assets/fake-data/products'

const NewArrivals = () => {
    return (
        <div className="new section container" id="News">
            <h2 className="section__title">
                New Arrivals
            </h2>
                    
            <div className="new__container">
                    <div className="swiper new-swiper">
                        <div className="swiper-wrapper">                                           
                            {productData.getProducts(4).map((item,index) => ( 
                                <div className="new__card swiper-slide" key={index} >                                    
                                    <span className="new__tag">New</span>
                    
                                    <img src={item.img} alt="" className="new__img"/>
                    
                                    <div className="new__data">
                                        <h3 className="new__title">{item.name}</h3>
                                        <span className="new__price">${item.price}</span>
                                    </div>
                    
                                    <button className="button new__button">ADD TO CART</button>                                    
                                </div>
                            ))}                    
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default NewArrivals
