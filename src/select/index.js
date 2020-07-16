import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Select(props) {
  return (
    <div className="select">
      <select className="select-element">{props.children}</select>
      <span className="select-icon" />
    </div>
  )
}

Select.Option = props => (
  <option disabled={props.disabled} value={props.value}>
    {props.children}
  </option>
)

Select.propTypes = {
  children: PropTypes.node,
}

Select.Option.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Select.Option.defaultProps = {
  value: '',
}

export default Select
