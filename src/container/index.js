import './styles'
import React from 'react'
import PropTypes from 'prop-types'

function Container(props) {
  const styleName = [props.component, props.className].join(' ').trim()
  return <div className={styleName}>{props.children}</div>
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Container.defaultProps = {
  component: 'container',
}

export default Container
