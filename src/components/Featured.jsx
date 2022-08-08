import React, { useEffect } from 'react'

import productData from '../assets/fake-data/products'



import ProductCard from './ProductCard'
import { useDispatch } from 'react-redux';

const Featured = (props) => {

    
    
    // const product = productData.getProductBySlug(props)
    // const product = productData.getProductBySlug()
    // const featured = props.featuredData.find(e => e.slug === 'rose-gold')
    // console.log(props.featuredData);

    // const featured = productData.find( e => e.slug === props.featuredData.slug)

    // console.log(featured);

    // console.log(featured.find(e => e.slug === '');    
    const featured = props.featuredData

    // console.log(featured);

    return (
        <div className="featured section container" id="Featured">
            <h2 className="section__title">
                    Featured
            </h2>

            <div className="featured__container grid">
                {featured.map((product, index) => (
                    <ProductCard 
                        img={product.img} 
                        name={product.name} 
                        price={product.price} 
                        slug={product.slug} 
                        key={index}
                    />                    
                ))}                    
            </div>
        </div>
    )
}

export default Featured


// <div className="featured__card" key={index}>
                    //     <span className="featured__tag">Sale</span>
                    //     <Link to={`./products/${features.slug}`} >                        
                    //         <img src={features.imgFeatured} alt="" className="featured__img" />
                    //     </Link>
                    //     <div className="featured__data">
                    //         <h3 className="featured__title">{features.name}</h3>
                    //         <span className="featured__price">${features.price}</span>
                    //     </div>
                    //     <button className="button featured__button" onClick={() => dispatch(set(features.slug))}>ADD TO CART</button>
                    // </div>