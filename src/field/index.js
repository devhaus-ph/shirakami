import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
  const styleName = ['field', props.className].join(' ').trim()
  return (
    <div className={styleName}>
      <label className="label">{props.label}</label>
      {props.children}
      <label className="message">{props.message}</label>
    </div>
  )
}

/*----------------
    Prop Types
----------------*/
Field.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
}

export default Field
