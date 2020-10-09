import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Flex(props) {
  // Separate HTML attribute props
  const { children, className, column, fullwidth } = props

  // Build CSS classes
  const flexStyle = 'sk-flex'
  const isColumn = column && 'sk-flex-column'
  const isFullwidth = fullwidth && 'sk-flex-fullwidth'
  let styleName = [flexStyle, isColumn, isFullwidth, className]
  styleName = styleName.join(' ').trim()

  return <div className={styleName}>{children}</div>
}

Flex.propTypes = {
  column: PropTypes.bool,
  fullwidth: PropTypes.bool,
}

export default Flex
