import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
  return (
    <input
      className="app__input"
      pattern={props.pattern}
      placeholder={props.placeholder}
      size={props.size}
      type={props.type}
    />
  )
}

Input.propTypes = {
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
}

Input.defaultProps = {
  size: 20,
}

export default Input
