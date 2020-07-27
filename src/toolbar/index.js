import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {
  const className = ['toolbar', props.className].join(' ').trim()
  return <div className={className}>{props.children}</div>
}

Toolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Toolbar
