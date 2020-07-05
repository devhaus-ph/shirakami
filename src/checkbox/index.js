import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Checkbox(props) {
  const styleName = [props.component, props.className].join(' ')

  return (
    <label className={styleName}>
      <input className="checkbox-input" type="checkbox" />
      <span className="checkbox-label">{props.label}</span>
      <span className="checkbox-mark" />
    </label>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
}

Checkbox.defaultProps = {
  component: 'checkbox',
}

export default Checkbox
