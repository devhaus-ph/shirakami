import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Section(props) {
  const styleName = ['section', props.className].join(' ')

  return (
    <div className={styleName}>
      <h2 className="section-title">{props.title}</h2>
      {props.children}
    </div>
  )
}

Section.Field = (props) => (
  <div className="section-field">
    <label className="section-label">{props.label}</label>
    {props.children}
  </div>
)

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
}

Section.Field.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
}

Section.defaultProps = {
  className: '',
}

export default Section
