import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Flex(props) {
  let styleName = [
    props.component,
    props.className,
    props.direction,
    props.fullwidth ? 'fullwidth' : '',
  ]

  styleName = styleName.join(' ').trim()
  return <div className={styleName}>{props.children}</div>
}

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Flex.defaultProps = {
  component: 'flex',
  direction: 'column',
}

export default Flex
