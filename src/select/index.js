import './styles.css'
import React from 'react'

function Select(props) {
  // Separate HTML attribute props
  const { className, children, ...other } = props

  // Build CSS classes
  const styleName = ['sk-select', className].join(' ').trim()

  return (
    <div className={styleName}>
      <select className="sk-select-input" {...other}>
        {children}
      </select>
    </div>
  )
}

//--  Sub Component  --//
Select.Option = props => {
  // Separate HTML attribute props
  const { className, children, ...other } = props

  return (
    <option className={className} {...other}>
      {children}
    </option>
  )
}

export default Select
