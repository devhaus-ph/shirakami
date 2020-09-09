import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
  const className = ['sk-form', props.className].join(' ').trim()

  return (
    <form className={className} onSubmit={props.onSubmit}>
      <h2 className="sk-form-title">{props.title}</h2>
      <p className="sk-form-desc">{props.desc}</p>
      {props.children}
    </form>
  )
}

/*--------------------
    Sub Components
--------------------*/
Form.Section = props => {
  const className = ['sk-form-section', props.className].join(' ').trim()

  return (
    <section className={className}>
      <h3>{props.title}</h3>
      {props.children}
    </section>
  )
}

Form.Row = props => {
  const className = ['sk-form-section-row', props.className].join(' ').trim()
  return <div className={className}>{props.children}</div>
}

Form.Footer = props => {
  const className = ['sk-form-footer', props.className].join(' ').trim()
  return <section className={className}>{props.children}</section>
}

/*----------------
    Prop Types
----------------*/
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  desc: PropTypes.string,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
}

Form.Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
}

Form.Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Form.Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Form
