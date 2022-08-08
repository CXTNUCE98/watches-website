import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {BiRightArrowAlt, BiLeftArrowAlt} from 'react-icons/bi'
import {ImQuotesLeft}  from 'react-icons/im'

import {testimonialList} from '../assets/fake-data/testimonial'
import testimonialImg from '../assets/img/testimonial.png'

class Testimonial extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
    //   indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    
    return (
      <div className="testimonial ">
        <div className="slide-container">
            <Slide ref={this.slideRef} {...properties}>
                {testimonialList.map((each, index) => (
                <div key={index} className="each-slide container section grid">
                    <div className='slides '>
                        <div className="slides__quote"><ImQuotesLeft /></div>
                        <div className='slides__desc'>{each.desc}</div>
                        <div className='slides__date'>{each.date}</div>
                        <div className="slides__perfill">
                            <img className="lazy" src={each.imgTest} alt="sample" />
                            <div className="slides__box">
                                <div className='slides__box__name'>{each.name}</div>
                                <div className='slides__box__detail'>{each.detail}</div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__images">
                        <div className="testimonial__square"></div>
                        <img src={testimonialImg} alt="" className="testimonial__img"/>
                    </div>
                </div>
                ))}
            </Slide>
            <div className="slide-container__box">
                <button className='slide-container__box__btn' onClick={this.back}><BiLeftArrowAlt /></button>
                <button className='slide-container__box__btn' onClick={this.next}><BiRightArrowAlt/></button>
            </div>            
        </div>
      </div>
    );
  }
}

export default Testimonial;





































