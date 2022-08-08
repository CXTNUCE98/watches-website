/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux/es/exports'

import ProductViewModal from './ProductViewModal'

const ProductCard = (props) => {

    const dispatch = useDispatch()

    // const product = props.product
    const [modalOpen, setModalOpen] = useState(false);

    // console.log(props.slug);
    
    return (
        <div className="featured__card">
            <span className="featured__tag">Sale</span>
            <Link to={`./products/${props.slug}`} >                        
                <img src={props.img} alt="" className="featured__img" />
            </Link>
            <div className="featured__data">
                <h3 className="featured__title">{props.name}</h3>
                <span className="featured__price">${props.price}</span>
            </div>
            {/* <Button className="button featured__button" onClick={() => dispatch(set(props.slug))}>
                ADD TO CART
            </Button> */}
            <div>
                <button 
                    className='openModalBtn btn featured__button' 
                    onClick={() => {setModalOpen(true)}}
                >
                    Quick View
                </button>
                {modalOpen && <ProductViewModal setOpenModal={setModalOpen} slug={props.slug} />}
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ProductCard
