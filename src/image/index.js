import './styles.css'
import React from 'react'

function Image(props) {
  // Separate HTML attribute props
  const { className, rounded, ...other } = props

  // Build CSS Classes
  const isRounded = rounded && 'sk-image-rounded'
  const styleName = ['sk-image', isRounded, className].join(' ').trim()

  return <img className={styleName} {...other} />
}

export default Image
