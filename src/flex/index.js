import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Flex(props) {
  const col = props.column && 'column'
  const fullwidth = props.fullwidth && 'fullwidth'
  const className = ['flex', col, fullwidth, props.className].join(' ').trim()
  return <div className={className}>{props.children}</div>
}

Flex.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  column: PropTypes.bool,
  fullwidth: PropTypes.bool,
}

export default Flex
