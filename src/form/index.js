import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
  // Separate HTML attribute props
  const { children, className, desc, title, ...other } = props

  // Build CSS classes
  const formStyle = 'sk-form'
  const styleName = [formStyle, className].join(' ').trim()

  return (
    <form className={styleName} {...other}>
      <h2 className="sk-form-title">{title}</h2>
      <p className="sk-form-desc">{desc}</p>
      {children}
    </form>
  )
}

/*--  Sub Components  --*/
Form.Section = props => {
  // Build CSS classes
  const styleName = ['sk-form-section', props.className].join(' ').trim()

  return (
    <section className={styleName}>
      <h3>{props.title}</h3>
      {props.children}
    </section>
  )
}

Form.Row = props => {
  // Build CSS classes
  const styleName = ['sk-form-row', props.className].join(' ').trim()
  return <div className={styleName}>{props.children}</div>
}

Form.Footer = props => {
  // Build CSS classes
  const styleName = ['sk-form-footer', props.className].join(' ').trim()
  return <section className={styleName}>{props.children}</section>
}

/*--  Prop Types  --*/
Form.propTypes = {
  desc: PropTypes.string,
  title: PropTypes.string,
}

Form.Section.propTypes = {
  title: PropTypes.string,
}

export default Form
