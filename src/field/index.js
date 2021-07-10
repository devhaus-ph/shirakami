import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
  // Separate HTML attribute props
  const { children, className, label, message, required, ...other } = props

  // Build CSS classes
  const fieldStyle = 'sk-field'
  const styleName = [fieldStyle, className].join(' ').trim()

  return (
    <div className={styleName} {...other}>
      <label className="sk-field-label">
        {label}
        <span className="sk-field-required">{required ? '*' : ''}</span>
      </label>
      {children}
      <label className="sk-field-message">{message}</label>
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string,
  message: PropTypes.string,
}

export default Field
