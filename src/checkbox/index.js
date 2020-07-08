import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Checkbox(props) {
  const styleName = [props.component, props.className].join(' ').trim()

  return (
    <label className={styleName}>
      <input className="input" type="checkbox" />
      <p className="label">{props.children}</p>
      <span className="mark" />
    </label>
  )
}

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Checkbox.defaultProps = {
  component: 'checkbox',
}

export default Checkbox
