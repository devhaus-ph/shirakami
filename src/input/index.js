import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
  const className = ['input', props.className].join(' ').trim()

  return (
    <input
      className={className}
      pattern={props.pattern}
      placeholder={props.placeholder}
      size={props.size}
      type={props.type}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
}

Input.defaultProps = {
  size: 25,
}

export default Input
