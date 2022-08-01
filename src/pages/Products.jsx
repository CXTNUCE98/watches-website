import React from 'react'

import productData from '../assets/fake-data/products'

import {RiShoppingBagLine} from 'react-icons/ri'

const Products = () => {

  const product = productData.getAllProducts()

  return (
    <div className='productsList'>
      <div className="products__container grid">
        {product.map((item,index) => (
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
    </div>
  )
}

export default Products
