import './styles.css'
import React from 'react'

function Checkbox(props) {
  // Separate HTML attribute props
  const { className, children, ...other } = props

  // Build CSS classes
  const checkboxStyle = 'sk-checkbox'
  const styleName = [checkboxStyle, className].join(' ').trim()

  return (
    <label className={styleName}>
      <input className="sk-checkbox-input" type="checkbox" {...other} />
      <p className="sk-checkbox-label">{props.children}</p>
      <span className="sk-checkbox-mark" />
    </label>
  )
}

export default Checkbox
