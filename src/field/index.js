import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
  const styleName = [props.component, props.className].join(' ').trim()
  return (
    <div className={styleName}>
      <label className="label">{props.label}</label>
      {props.children}
    </div>
  )
}

/*--------------------
    Sub Components
--------------------*/
Field.Message = (props) => {
  let styleName = [props.component, props.className].join(' ').trim()
  return <label className={styleName}>{props.children}</label>
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

Field.Message.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

/*-------------------
    Default Props
-------------------*/
Field.defaultProps = {
  component: 'field',
}

Field.Message.defaultProps = {
  component: 'message',
}

export default Field
