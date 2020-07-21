import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Flex(props) {
  const column = props.column ? 'column' : ''
  const fullwidth = props.fullwidth ? 'fullwidth' : ''
  let styleName = ['flex', column, fullwidth, props.className]
  styleName = styleName.join(' ').trim()

  return <div className={styleName}>{props.children}</div>
}

Flex.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  column: PropTypes.bool,
  fullwidth: PropTypes.bool,
}

export default Flex
