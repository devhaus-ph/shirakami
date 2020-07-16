import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Titlebar(props) {
  const styleName = ['titlebar', 'container', props.className].join(' ').trim()
  return (
    <div className={styleName}>
      <span className="abbr">{props.abbr}</span>
      <span className="title">{props.children}</span>
    </div>
  )
}

Titlebar.propTypes = {
  abbr: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}
export default Titlebar
