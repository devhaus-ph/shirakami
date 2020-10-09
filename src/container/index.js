import './styles.css'
import React from 'react'

function Container(props) {
  // Separate HTML attribute props
  const { children, className, ...other } = props

  // Build CSS classes
  const containerStyle = 'sk-container'
  const styleName = [containerStyle, className].join(' ').trim()

  return (
    <div className={styleName} {...other}>
      {props.children}
    </div>
  )
}

export default Container
