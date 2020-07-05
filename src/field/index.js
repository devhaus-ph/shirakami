import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
  const styleName = [props.component, props.className].join(' ')

  return (
    <div className={styleName}>
      <label className="field-label">{props.label}</label>
      {props.children}
      <label className="field-message">{props.message}</label>
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
}

Field.defaultProps = {
  component: 'field',
}

export default Field
