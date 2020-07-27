import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
  const className = ['form', props.className].join(' ').trim()

  return (
    <form className={className} onSubmit={props.onSubmit}>
      <h2 className="title">{props.title}</h2>
      <p className="desc">{props.desc}</p>
      {props.children}
    </form>
  )
}

/*--------------------
    Sub Components
--------------------*/
Form.Section = props => {
  const className = ['section', props.className].join(' ').trim()

  return (
    <section className={className}>
      <h3>{props.title}</h3>
      {props.children}
    </section>
  )
}

Form.Footer = props => {
  const className = ['footer', props.className].join(' ').trim()
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

Form.Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Form
