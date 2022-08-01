import React from 'react'
import { BsWatch } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'
import {BsMoon, BsGrid} from 'react-icons/bs'
import {RiShoppingBagLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
      <nav className="nav container">
        <Link to='/'>
          <div className='nav__logo'>
            <BsWatch/>Rolex
          </div>
        </Link>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#Home" className='nav__link active-link'>Home</a>
            </li>
            <li className="nav__item">
              <a href="#Featured" className='nav__link '>Featured</a>
            </li>
            <Link to="/products">
              <li className="nav__item">
                <div className='nav__link '>Products</div>
              </li>
            </Link>            
            <li className="nav__item">
              <a href="#News" className='nav__link '>News</a>
            </li>
          </ul>
          <div className="nav__close">
            <AiOutlineClose />
          </div>
        </div>

        <div className="nav__btns">
          <BsMoon />
          <Link to='/cart'>
          <div className="nav__shop">
            <RiShoppingBagLine />
          </div>
          </Link>
          <div className="nav__shop">
            <BsGrid />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
