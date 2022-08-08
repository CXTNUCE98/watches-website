import product1 from '../img/product1.png'
import product2 from '../img/product2.png'
import product3 from '../img/product3.png'
import product4 from '../img/product4.png'
import product5 from '../img/product5.png'
import product6 from '../img/new1.png'
import product7 from '../img/new2.png'
import product8 from '../img/new3.png'
import product9 from '../img/new4.png'
import featured1 from '../img/featured1.png'
import featured2 from '../img/featured2.png'
import featured3 from '../img/featured3.png'

const products = [
    {
        name: 'Spirit rose',
        price: 1500,
        img: product1,
        slug: 'spirit-rose'
    },
    {
        name: 'Khaki pilot',
        price: 1350,
        img: product2,
        slug: 'khaki-pilot'
    },
    {
        name: 'Jubilee black',
        price: 870,
        img: product3,
        slug: 'jubilee-black'
    },
    {
        name: 'Fosil me3',
        price: 650,
        img: product4,
        slug: 'fosil-me3'
    },
    {
        name: 'Duchen',
        price: 950,
        img: product5,
        slug: 'duchen'
    },
    {
        name: 'Longines rose',
        price: 980,
        img: product6,
        slug: 'longines-rose'
    },
    {
        name: 'Jazzmaster',
        price: 1150,
        img: product7,
        slug: 'jazzmaster1'
    },
    {
        name: 'Dreyfuss gold',
        price: 750,
        img: product8,
        slug: 'dreyfuss-gold'
    },
    {
        name: 'Portuguese rose',
        price: 1590,
        img: product9,
        slug: 'portuguese-rose'
    },
    {
        name: "Jazzmaster",
        price: 1050,
        img: featured1,
        slug: 'jazzmaster2'
    },
    {
        name: "Ingersoll",
        price: 250,
        img: featured2,
        slug: 'ingersoll'
    },
    {
        name: "Rose gold",
        price: 1050,
        img: featured3,
        slug: 'rose-gold'
    },
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData