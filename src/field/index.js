import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
  const styleName = [props.component, props.className].join(' ').trim()
  return <div className={styleName}>{props.children}</div>
}

/*--------------------
    Sub Components
--------------------*/
Field.Label = (props) => {
  let styleName = [props.component, props.className].join(' ').trim()
  return <label className={styleName}>{props.children}</label>
}

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

Field.Label.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
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

Field.Label.defaultProps = {
  component: 'label',
}

Field.Message.defaultProps = {
  component: 'message',
}

export default Field
