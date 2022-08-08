import React, { useEffect, useState } from 'react'

import {BsTrash} from 'react-icons/bs'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

import { useDispatch } from 'react-redux'
import { removeItem, updateItem } from '../redux/shopping-cart/cartItemsSlide'

const CartItem = (props) => {
    // const products = props.product
    const dispatch = useDispatch()
    // const product = props.product
    
    const [item, setItem] = useState(props.product);

    const [quantity, setQuantity] = useState(props.product.quantity);

    useEffect(() => {
        setItem(props.product);
        setQuantity(props.product.quantity);
    },[props.product])

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({...item, quantity: quantity + 1}))
        } if (opt === '-') {
            dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <>
            <td className='cart__item'>
                <img className='cart__item__img' src={item.img} alt="" />
                <p className='cart__item__img__name'>{item.name}</p>
                </td>
                <td className='cart__price'>${item.price}</td>
                <td className='cart__qty'>
                    <div className="cart__qty__info">
                        <div className="product-view__minus" onClick={() => updateQuantity('-')} ><AiOutlineMinus/></div>
                        <div className="quantity">{item.quantity}</div>
                        <div className="product-view__plus" onClick={() => updateQuantity('+')} ><AiOutlinePlus/></div>
                    </div>
            </td>
            <td className='cart__subtotal'>
                <div className="cart__subtotal__price">
                    ${item.price * item.quantity}
                </div>
                <div className="cart__subtotal__delete">
                    <BsTrash className='cart__subtotal__trash' onClick={() => removeCartItem()} />
                </div>
            </td>
        </>
    )
}

export default CartItem

// {/* <table>
//             <thead>
//             <tr>
//                 <th className="cart__container__wrapper__col item" scope="col"><span>Item</span></th>
//                 <th className="cart__container__wrapper__col price" scope="col"><span>Price</span></th>
//                 <th className="cart__container__wrapper__col qty" scope="col"><span>Qty</span></th>
//                 <th className="cart__container__wrapper__col subtotal" scope="col"><span>Subtotal</span></th>
//             </tr>
//             </thead>
//             <tbody>
//                 {products.map((item, index) => (
//                     <tr key={index}>
//                         <td className='cart__item'>
//                         <img className='cart__item__img' src={item.img} alt="" />
//                         <p className='cart__item__img__name'>{item.name}</p>
//                         </td>
//                         <td className='cart__price'>${item.price}</td>
//                         <td className='cart__qty'>
//                             <div className="cart__qty__info">
//                                 <div className="product-view__minus" onClick={() => updateQuantity('minus')} ><AiOutlineMinus/></div>
//                                 <div className="quantity">{item.quantity}</div>
//                                 <div className="product-view__plus" onClick={() => updateQuantity('plus')} ><AiOutlinePlus/></div>
//                             </div>
//                         </td>
//                         <td className='cart__subtotal'>
//                             <div className="cart__subtotal__price">
//                                 ${item.price}
//                             </div>
//                             <div className="cart__subtotal__delete">
//                                 <BsTrash className='cart__subtotal__trash' onClick={() => removeCartItem()} />
//                             </div>
//                         </td>
//                     </tr>
//                 ))}
                    
//             </tbody>
//         </table>  */}