import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
  const styleName = [props.component, props.className].join(' ')

  return (
    <form
      className={styleName}
      onSubmit={props.onSubmit}
      className={props.className}>
      <h2 className="form-title">{props.title}</h2>
      <label className="form-description">{props.description}</label>
      {props.children}
    </form>
  )
}

Form.Section = (props) => {
  const styleName = [props.component, props.className].join(' ')

  return (
    <section className={styleName}>
      <h3 className="form-legend">{props.title}</h3>
      {props.children}
    </section>
  )
}

Form.Footer = (props) => {
  const styleName = [props.component, props.className].join(' ')
  return <section className={styleName}>{props.children}</section>
}

/*---------------
    PropTypes
---------------*/
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
}

Form.Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  title: PropTypes.string,
}

Form.Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

/*-------------------
    Default Props
-------------------*/
Form.defaultProps = {
  component: 'form',
}

Form.Section.defaultProps = {
  component: 'form-section',
}

Form.Footer.defaultProps = {
  component: 'form-footer',
}

export default Form
