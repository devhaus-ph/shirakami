import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
  return (
    <form
      className="app__form"
      onSubmit={props.onSubmit}
      className={props.className}>
      <h2 className="form__title">{props.title}</h2>
      <label className="form__description">{props.description}</label>
      {props.children}
    </form>
  )
}

Form.Section = (props) => (
  <section className="form__section">
    <p className="form__legend">{props.title}</p>
    {props.children}
  </section>
)

Form.Footer = (props) => (
  <section className="form__footer">{props.children}</section>
)

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
}

Form.Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

Form.Footer.propTypes = {
  children: PropTypes.node,
}

export default Form
