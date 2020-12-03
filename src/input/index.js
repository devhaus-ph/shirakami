import './styles.css'
import React from 'react'

function Input(props) {
  // Separate className from other props
  const { className, number, ...other } = props

  // Build CSS classes
  const isNumber = number && 'sk-input-number'
  const styleName = ['sk-input', isNumber, className].join(' ').trim()
  return <input className={styleName} {...other} />
}

Input.defaultProps = {
  size: 30,
}

export default Input
