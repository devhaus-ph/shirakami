import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Section(props) {
  const styleName = ['app__section', props.className].join(' ')

  return (
    <div className={styleName}>
      <h2 className="section__title">{props.title}</h2>
      {props.children}
    </div>
  )
}

Section.Field = (props) => (
  <div className="section__field">
    <label className="section__label">{props.label}</label>
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
