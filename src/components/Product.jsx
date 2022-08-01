import React from 'react'

import productData from '../assets/fake-data/products'

import {RiShoppingBagLine} from 'react-icons/ri'

const Product = () => {
    return (
        <section className="products section container" id="products">
                <h2 className="section__title">
                    Products
                </h2>
                
                <div className="products__container grid">
                    {productData.getProducts(6).map((item, index) => (
                        <div className="products__card" key={index}>
                            <img src={item.img} alt="" className="products__img"/>

                            <h3 className="products__title">{item.name}</h3>
                            <span className="products__price">${item.price}</span>

                            <button className="products__button">
                                <RiShoppingBagLine />
                            </button>
                        </div>
                    ))}
                </div>
        </section>
    )
}

export default Product
