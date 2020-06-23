import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Checkbox(props) {
  return (
    <label className="app__checkbox">
      <input className="checkbox__input" type="checkbox" />
      <span className="checkbox__label">{props.label}</span>
      <span className="checkbox__mark" />
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
}

export default Checkbox
