import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Titlebar(props) {
  const styleName = [props.component, props.className].join(' ')
  return <p className={styleName}>{props.children}</p>
}

Titlebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Titlebar.defaultProps = {
  component: 'titlebar',
}

export default Titlebar
