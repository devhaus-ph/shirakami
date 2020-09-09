import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Select(props) {
  return (
    <div class="sk-select">
      <select className="sk-select-input">{props.children}</select>
    </div>
  )
}

/*-------------------
    Sub Component
-------------------*/
Select.Option = props => (
  <option disabled={props.disabled} value={props.value}>
    {props.children}
  </option>
)

/*----------------
    Prop Types
----------------*/
Select.propTypes = {
  children: PropTypes.node,
}

Select.Option.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Select
