import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { testimonialList } from '../assets/fake-data/testimonial';
import testimonialImg from '../assets/img/testimonial.png'

const Testimonial = () => {
    return (
        
            <div className="slide-container">      
            <Slide>
                {testimonialList.map((slideImage, index)=> (
                    <div className='testimonial__container'>
                        <div className="each-slide" key={index}>
                            <div>{slideImage.desc}</div>
                            <div>{slideImage.date}</div>
                            <div>{slideImage.name}</div>
                            <div>{slideImage.detail}</div>
                            <img src={slideImage.imgTest} alt="" className='slide__img' />
                        </div>
                    </div>
                ))} 
                </Slide>  
            <div className="testimonial__images">
                <div className="testimonial__square"></div>
                    <img src={testimonialImg} alt="" className="testimonial__img"/>
                </div>
            
            </div>
    )
}


export default Testimonial






































// import React, { useState,  useEffect, useCallback } from 'react'
// import PropTypes from 'prop-types'

// // import { testimonialList } from '../assets/fake-data/testimonial'

// import {BiRightArrowAlt, BiLeftArrowAlt} from 'react-icons/bi'

// import testimonialImg from '../assets/img/testimonial.png'

// const Testimonial = (props) => {

//     const data = props.data

//     const timeOut = props.timeOut ? props.timeOut : 3000

//     const [activeSlide, setActiveSlide] = useState(0);

//     const nextSlide = useCallback(
//         ()=> {
//         const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
//         setActiveSlide(index)
//         console.log(activeSlide);
//         },
//         [activeSlide, data]
//     )

//     const prevSlide = () =>{
//         const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
//         setActiveSlide(index)
//     }

//     useEffect(() => {
//         if (props.auto) {
//             const slideAuto = setInterval(() => {
//             nextSlide()
//             },timeOut)
//         return()=>{
//             clearInterval(slideAuto)
//         }
//         }
//     }, [nextSlide, timeOut, props])
//     return (
//         <div className='testimonial'>
//         {
//           data.map((item,index)=>(
//             <TestimonialSlide key={index} item={item} active={index === activeSlide}/>
//           ))          
//         }
//         {
//             props.control ? (
//               <div className="testimonial__control">
//                 <div className="testimonial__control__item" onClick={prevSlide}>
//                   <BiLeftArrowAlt/>
//                 </div>
//                 <div className="testimonial__control__item">
//                   <div className="index">
//                       {activeSlide + 1}/{data.length}
//                   </div>
//                 </div>
//                 <div className="testimonial__control__item" onClick={nextSlide}>
//                   <BiRightArrowAlt/>
//                 </div>
//               </div>
//             ) : null
//           }
//     </div>
//     )
// }

// Testimonial.propTypes = {
//     data: PropTypes.array.isRequired,
//     control: PropTypes.bool,
//     auto: PropTypes.bool,
//     timeOut: PropTypes.number
// }

// const TestimonialSlide = props =>(
//     <div className={`testimonial container section  ${props.active ? 'active' : ''}`}>
//         <div className="testimonial__container grid">
//             <div className="swiper testimonial-swiper">
//                 <div className="swiper-wrapper">
//                     <div className="testimonial__card swiper-slide" >
//                         <div className="testimonial__quote">
//                             <i className='bx bxs-quote-alt-left' ></i>
//                         </div>
//                         <p className="testimonial__description">
//                                 {props.item.desc}
//                         </p>
//                         <h3 className="testimonial__date">{props.item.date}</h3>
                
//                         <div className="testimonial__perfil">
//                             <img src={props.item.imgTest} alt="" className="testimonial__perfil-img"/>
                
//                             <div className="testimonial__perfil-data">
//                                 <span className="testimonial__perfil-name">{props.item.name}</span>
//                                 <span className="testimonial__perfil-detail">{props.item.detail}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="testimonial__images">
//                 <div className="testimonial__square"></div>
//                 <img src={testimonialImg} alt="" className="testimonial__img"/>
//             </div>
//         </div>
//     </div>      
// )

// export default Testimonial

