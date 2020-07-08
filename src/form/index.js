import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
  const styleName = [props.component, props.className].join(' ').trim()

  return (
    <form className={styleName} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

/*--------------------
    Sub Components
--------------------*/
Form.Title = (props) => {
  const styleName = [props.component, props.className].join(' ').trim()
  return <h2 className={styleName}>{props.children}</h2>
}

Form.Description = (props) => {
  const styleName = [props.component, props.className].join(' ').trim()
  return <label className={styleName}>{props.children}</label>
}

Form.Section = (props) => {
  const styleName = [props.component, props.className].join(' ').trim()
  return <section className={styleName}>{props.children}</section>
}

Form.Label = (props) => {
  const styleName = [props.component, props.className].join(' ').trim()
  return <h3 className={styleName}>{props.children}</h3>
}

Form.Footer = (props) => {
  const styleName = [props.component, props.className].join(' ').trim()
  return <section className={styleName}>{props.children}</section>
}

/*---------------
    PropTypes
---------------*/
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
}

Form.Title.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

Form.Description.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

Form.Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Form.Label.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
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

Form.Title.defaultProps = {
  component: 'title',
}

Form.Description.defaultProps = {
  component: 'description',
}

Form.Section.defaultProps = {
  component: 'section',
}

Form.Label.defaultProps = {
  component: 'label',
}

Form.Footer.defaultProps = {
  component: 'footer',
}

export default Form
