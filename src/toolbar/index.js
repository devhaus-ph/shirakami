import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {
  let styleName = [props.component, props.direction, props.className]
  styleName = styleName.join(' ').trim()
  return <div className={styleName}>{props.children}</div>
}

Toolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Toolbar.defaultProps = {
  component: 'toolbar',
  direction: 'row',
}

export default Toolbar
