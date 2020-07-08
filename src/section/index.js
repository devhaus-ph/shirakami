import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Section(props) {
  const styleName = [props.component, props.className].join(' ').trim()

  return (
    <div className={styleName}>
      <h2 className="title">{props.title}</h2>
      {props.children}
    </div>
  )
}

Section.Field = (props) => (
  <div className="field">
    <label className="label">{props.label}</label>
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
  component: 'section',
}

export default Section
