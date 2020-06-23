import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
  return (
    <div className="app__field">
      <label className="field__label">{props.label}</label>
      {props.children}
      <label className="field__message">{props.message}</label>
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  message: PropTypes.string,
}

export default Field
