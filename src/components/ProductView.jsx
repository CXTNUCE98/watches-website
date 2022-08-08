import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import {addItem} from '../redux/shopping-cart/cartItemsSlide'
import withRouter from '../withRouter'

import productData from '../assets/fake-data/products'

import { useLocation, useParams } from 'react-router-dom';

import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const ProductView = (props) => {

    let params = useParams();

    const dispatch = useDispatch()

    // const location = useLocation()

    useEffect(() => {
        async function fetchData() {
            dispatch(productData.getProductBySlug(params.slug))
        }
        fetchData();

    }, [dispatch, params.slug, props]);

    // console.log(props.params.slug);

    let product = productData.getProductBySlug(props.params.slug)
    // console.log(product);

    if (product === undefined) product = {
        price: 0,
        name: '',
        slug: '',
        img:''
    }

    // const [previewImg, setPreviewImg] = useState(product.img)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1 )
        }
    }

    // useEffect(() => {
    //     setPreviewImg(product.imgFeatured)
    //     setQuantity(1)
    // },[product])

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

    const goToCart = () => {
        props.history.push('/cart')
    }

    return (
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
                        <div className="product-view__title">{product.name}</div>
                        <div className="product-view__title">${product.price}</div>
                    </div>
                    <div className="product-view__info">
                        <div className="product-view__info__title">Số lượng</div>
                        <div className="product-view__info__quantity">
                            <div className="product-view__minus" onClick={() => updateQuantity('minus')} ><AiOutlineMinus/></div>
                            <div className="quantity">{quantity}</div>
                            <div className="product-view__plus" onClick={() => updateQuantity('plus')} ><AiOutlinePlus/></div>
                        </div>
                    </div>
                    <div className='product-view__button'>
                        <button className='product-view__button__btn' onClick={addToCart}>ADD TO CART</button>
                        <button className='product-view__button__btn' onClick={goToCart}>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object,
}

export default withRouter(ProductView)
