import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {
  return <div className="app__toolbar">{props.children}</div>
}

Toolbar.propTypes = {
  children: PropTypes.node,
}

export default Toolbar
