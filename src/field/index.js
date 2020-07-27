import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
  const className = ['field', props.className].join(' ').trim()

  return (
    <div className={className}>
      <label className="label">{props.label}</label>
      {props.children}
      <label className="message">{props.message}</label>
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
}

export default Field
