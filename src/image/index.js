import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Image(props) {
  const rounded = props.rounded && 'rounded'
  const className = ['image', rounded, props.className].join(' ').trim()

  return (
    <img
      className={className}
      src={props.src}
      height={props.height}
      width={props.width}
    />
  )
}

Image.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.number,
  src: PropTypes.string,
  width: PropTypes.number,
}

export default Image
