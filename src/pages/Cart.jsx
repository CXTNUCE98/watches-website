import React from 'react'

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

import cart1 from '../assets/img/product1.png'

const Cart = () => {
  return (
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
                <tr>
                  <td className='cart__item'>
                    <img className='cart__item__img' src={cart1} alt="" />
                    <p className='cart__item__img__name'>Cashmere cardigan with hood</p>
                  </td>
                  <td className='cart__price'>$24.00</td>
                  <td className='cart__qty'>- 2 +</td>
                  <td className='cart__subtotal'>$48.00</td>
                </tr>
                <tr>
                  <td className='cart__item'>
                    <img className='cart__item__img' src={cart1} alt="" />
                    <p className='cart__item__img__name'>Cashmere cardigan with hood</p>
                  </td>
                  <td className='cart__price'>$24.00</td>
                  <td className='cart__qty'>- 2 +</td>
                  <td className='cart__subtotal'>$48.00</td>
                </tr>
                <tr>
                  <td className='cart__item'>
                    <img className='cart__item__img' src={cart1} alt="" />
                    <p className='cart__item__img__name'>Cashmere cardigan with hood</p>
                  </td>
                  <td className='cart__price'>$24.00</td>
                  <td className='cart__qty'>- 2 +</td>
                  <td className='cart__subtotal'>$48.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart__summary">
              <span className="cart__summary__title">Summary</span>
              <span className="cart__prices-total">$2880</span>
            </div>
          </div>      
    </div>
  )
}

export default Cart


// {/* <div className="cart__card">
//               <div className="cart__box">
//                 <img src="assets/img/featured1.png" alt="" className="cart__img"/>
//               </div>
//               <div className="cart__details">
//                 <h3 className="cart__details__title">Jazzmaster</h3>
//                 <span className="cart__price">$1050</span>

//                 <div className="cart__amount">
//                   <div className="cart__amount-content">
//                     <span className="cart__amount-box">
//                       <AiOutlineMinus />
//                     </span>

//                     <span className="cart__amount-number">1</span>

//                     <span className="cart__amount-box">
//                       <AiOutlinePlus />
//                     </span>
//                   </div>

//                   <i className='bx bx-trash-alt cart__amount-trash' ></i>
//                 </div>
//               </div>
//             </div>                   */}
// {/* </div> */}