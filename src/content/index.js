import './styles'
import React from 'react'
import PropTypes from 'prop-types'

function Content(props) {
  let styleName = [
    props.component,
    props.className,
    props.direction,
    props.width,
  ]

  styleName = styleName.join(' ').trim()

  return <div className={styleName}>{props.children}</div>
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Content.defaultProps = {
  component: 'content',
  direction: 'column',
}

export default Content
