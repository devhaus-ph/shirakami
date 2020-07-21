import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Container(props) {
  return <div className="container">{props.children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
