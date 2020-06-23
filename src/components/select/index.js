import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../components'

function Select(props) {
  return (
    <div className="app__select">
      <select className="select__element">{props.children}</select>
      <span className="select__icon">
        <Icon icon="down" />
      </span>
    </div>
  )
}

Select.Option = (props) => (
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
