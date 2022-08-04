import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BsMoon, BsGrid, BsWatch,BsSun} from 'react-icons/bs'
import {RiShoppingBagLine} from 'react-icons/ri'

import { Link } from 'react-router-dom';

const Header = ({theme, setTheme}) => {

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  const [backnav, setBacknav] = useState()

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position >= 100) {
          setBacknav('back-nav')
        }
        if (position < 100) {
          setBacknav('')
        }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={`header ${backnav}`} >
      <nav className="nav container">
        <Link to='/'>
          <div className={`nav__logo ${backnav}`}>
            <BsWatch/>Rolex
          </div>
        </Link>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#Home" className={`nav__link ${backnav}`}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#Featured" className={`nav__link ${backnav}`}>Featured</a>
            </li>
            <Link to="/products">
              <li className="nav__item">
                <div className={`nav__link ${backnav}`}>Products</div>
              </li>
            </Link>            
            <li className="nav__item">
              <a href="#News" className={`nav__link ${backnav}`}>News</a>
            </li>
          </ul>
          <div className="nav__close">
            <AiOutlineClose />
          </div>
        </div>

        <div className={`nav__btns ${backnav}`}>
          <div className={`lTheme ${backnav}`} onClick={toggleTheme}>
            {theme === "light" ? <BsMoon  /> : <BsSun  />}
            
          </div>
          <Link to='/cart'>
          <div className={`nav__shop ${backnav}`}>
            <RiShoppingBagLine />
          </div>
          </Link>
          <div className={`nav__shop ${backnav}`}>
            <BsGrid />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
