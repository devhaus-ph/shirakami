import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Toast(props) {
  // Build CSS classes
  const isActive = props.active && 'sk-toast-active'
  const toastType = 'sk-toast-' + props.type
  let styleName = ['sk-toast', toastType, isActive, props.className]
  styleName = styleName.join(' ').trim()

  return <div className={styleName}>{props.children}</div>
}

Toast.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
}

export default Toast
