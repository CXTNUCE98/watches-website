import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'
import Button from './Button'
import ProductView from './ProductView'

import { remove } from '../redux/product-modal/productModalSlice'
import { addItem } from '../redux/shopping-cart/cartItemsSlide'

import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

const ProductViewModal = ({setOpenModal, slug}) => {

  const productSlug = slug

  const dispatch = useDispatch()
  const product = productData.getProductBySlug(productSlug)
  
  const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1 )
        }
    }

    const addToCart = () => {
        dispatch(
            addItem({
                slug: product.slug,
                name: product.name,
                quantity: quantity,
                price: product.price,
                img: product.img
            })
        )
        alert('success!')
    }

    // const goToCart = () => {
    //     props.history.push('/cart')
    // }

  return (
    <div className="product-view-modal active">
      <div className="product-view-modal__container">
        <div className="product-view-modal__close">
          <button className='product-view-modal__close__btn'
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          <div className="product-view">
            <div className='product-view__wrapper'>            
                <div className="product-view__container">
                    <img src={product.img} alt="" className='product-view__img' />
                    <div className="product-view__container__title">Chi tiết sản phẩm</div>
                    <div className="product-view__container__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat, dicta, animi laboriosam amet excepturi neque illum corporis iure vel, ad facere nisi earum porro! Et nulla quibusdam ea quos!
                    </div>
                </div>
                <div className="product-view__detail">
                    <div>
                        <div className="product-view-modal__title">{product.name}</div>
                        <div className="product-view-modal__title">${product.price}</div>
                    </div>
                    <div className="product-view-modal__info">
                        <div className="product-view-modal__info__title">Số lượng</div>
                        <div className="product-view-modal__info__quantity">
                            <div className="product-view-modal__info__quantity__minus" onClick={() => updateQuantity('minus')} ><AiOutlineMinus/></div>
                            <div className="product-view-modal__info__quantity__quantity">{quantity}</div>
                            <div className="product-view-modal__info__quantity__plus" onClick={() => updateQuantity('plus')} ><AiOutlinePlus/></div>
                        </div>
                    </div>
                    <div className='product-view-modal__button'>
                        <button className='product-view__button__btn' onClick={addToCart}>ADD TO CART</button>
                        {/* <button className='product-view__button__btn' onClick={goToCart}>BUY NOW</button> */}
                    </div>
                </div>
            </div>
        </div>
        </div>   
         
      </div>      
    </div>
  )
}

export default ProductViewModal

