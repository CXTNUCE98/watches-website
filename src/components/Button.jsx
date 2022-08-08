import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    console.log(props);
  return (
    <button
        className={`btn `}
        onClick={props.onClick ? () => props.onClick() : null}
    >
        <span className='btn__txt'>{props.children}</span>
        {
            props.icon ? (
                <span className='btn__icon'>
                    <i className={`${props.icon} bx-tada`}></i>
                </span>
            ) : null
        }
    </button>
  )
}

Button.propTypes = {    
    onClick: PropTypes.func
}

export default Button
