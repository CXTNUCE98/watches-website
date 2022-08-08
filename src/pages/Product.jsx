import React from 'react'

import productData from '../assets/fake-data/products'
import ProductView from '../components/ProductView'

const Product = (props) => {

    const product = props.product
    // console.log(productData.getProductBySlug(props.match.params));
    // console.log(product);
    // const product = productData.getProductBySlug(props)
    // const product = productData.getProductBySlug(props.product.slug)
    // const product = productData.getProductBySlug(props.slug)

    // console.log(props.match.params.slug);

    return (        
        <ProductView product={product} />
    )
}

export default Product
