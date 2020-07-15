import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
  const styleName = ['form', props.className].join(' ').trim()

  return (
    <form className={styleName} onSubmit={props.onSubmit}>
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>
      {props.children}
    </form>
  )
}

/*--------------------
    Sub Components
--------------------*/
Form.Section = props => {
  const styleName = ['section', props.className].join(' ').trim()

  return (
    <section className={styleName}>
      <h3>{props.title}</h3>
      {props.children}
    </section>
  )
}

Form.Footer = props => {
  const styleName = ['footer', props.className].join(' ').trim()
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
  className: PropTypes.string,
}

Form.Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Form
