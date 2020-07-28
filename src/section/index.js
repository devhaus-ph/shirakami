import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Section(props) {
  const className = ['section', props.className].join(' ').trim()

  return (
    <section className={className}>
      <h1 className="title">{props.title}</h1>
      {props.children}
    </section>
  )
}

/*-------------------
    Sub Component
-------------------*/
Section.Item = props => {
  const className = ['item', props.className].join(' ').trim()

  return (
    <div className={className}>
      <label className="label">{props.label}</label>
      {props.children}
    </div>
  )
}

/*-----------------
    Props Types
-----------------*/
Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Section.Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Section
