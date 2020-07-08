import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Titlebar(props) {
  const styleName = [props.component, props.className].join(' ').trim()
  return (
    <p className={styleName}>
      <span className="titlebar-abbr">{props.abbr}</span>
      <span className="titlebar-title">{props.children}</span>
    </p>
  )
}

Titlebar.propTypes = {
  abbr: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Titlebar.defaultProps = {
  component: 'titlebar',
}

export default Titlebar
