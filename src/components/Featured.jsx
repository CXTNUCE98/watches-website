import React from 'react'

import {featured} from '../assets/fake-data/featured'

const Featured = () => {
    return (
        <div className="featured section container" id="Featured">
            <h2 className="section__title">
                    Featured
            </h2>

            <div className="featured__container grid">
                {featured.map((features, index) => (
                    <div className="featured__card" key={index}>
                        <span className="featured__tag">Sale</span>
                        <img src={features.imgFeatured} alt="" className="featured__img" />
                        <div className="featured__data">
                            <h3 className="featured__title">{features.name}</h3>
                            <span className="featured__price">${features.price}</span>
                        </div>
                        <button className="button featured__button">ADD TO CART</button>
                    </div>
                ))}                    
            </div>
        </div>
    )
}

export default Featured
