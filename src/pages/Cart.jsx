import React, { useEffect, useState } from 'react'

import {useSelector} from 'react-redux'

import productData from '../assets/fake-data/products'

import CartItem from '../components/CartItem'

const Cart = () => {

  const cartItems = useSelector(state => state.cartItems.value)

  const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

  const [totalProducts, setTotalProducts] = useState(0)

  const [totalPrice, setTotalPrice] = useState(0)

  console.log(cartItems);
 

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems))
    setTotalPrice(cartItems.reduce((total, item) => {
      return total += item.price * item.quantity
    },0))
    setTotalProducts(cartItems.reduce((total, item) => total + item.quantity),0)
  },[cartItems])

 

  return (
    <div className='main-cart'>
      <div className="cart " >
        <div className="cart__title">Shopping Cart</div>
          <div className="cart__container">
            <div className='cart__container__wrapper'>
            <table>
              <thead>
              <tr>
                  <th className="cart__container__wrapper__col item" scope="col"><span>Item</span></th>
                  <th className="cart__container__wrapper__col price" scope="col"><span>Price</span></th>
                  <th className="cart__container__wrapper__col qty" scope="col"><span>Qty</span></th>
                  <th className="cart__container__wrapper__col subtotal" scope="col"><span>Subtotal</span></th>
              </tr>
              </thead>
              <tbody>
                  {cartProducts.map((item, index) => (
                      <tr key={index}>
                          <CartItem product={item}  />
                      </tr>
                  ))}
                      
              </tbody>
          </table> 
              <div className="cart__button">
                <div className="cart__button__box">
                  <button className='cart__button__btn'>Continue Shopping</button>
                </div>
                <div className='cart__button__box'>
                  <button className='cart__button__btn'>Clear Shopping Cart</button>
                  <button className='cart__button__btn'>Update Shopping Cart</button>
                </div>
              </div>
            </div>            
            <div className="cart__summary">
                <span className="cart__summary__title">Summary</span>
                <span className="cart__summary__shipping">Estimate Shipping and Tax</span>
                <span className="cart__summary__sub">
                  <span className="cart__summary__sub__total">
                    <span>Subtotal </span>
                    <span>${(totalPrice)}</span>
                  </span>
                  <span className="cart__summary__sub__fee">
                    <span>Shipping (Flat Rate - Fixed)</span>
                    <span>$15.00</span>
                  </span>
                  <span className="cart__summary__sub__totals">
                    <span>Order Total </span>
                    <span>${totalPrice + 15}</span>
                  </span>
                </span>
                <span className="cart__summary__discount">
                  Apply Discount Code
                </span>
                <span className='cart__summary__button'>
                  <button className="cart__summary__button__btn">Proceed To Checkout</button>
                  <span className="cart__summary__button__desc">Check Out with Multiple Addresses</span>
                </span>
            </div>
          </div>      
      </div>
    </div>
  )
}

export default Cart