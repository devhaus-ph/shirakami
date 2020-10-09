import './styles.css'
import React from 'react'

function Input(props) {
  // Separate className from other props
  const { className, ...other } = props

  // Build CSS classes
  const styleName = ['sk-input', className].join(' ').trim()
  return <input className={styleName} {...other} />
}

Input.defaultProps = {
  size: 30,
}

export default Input
