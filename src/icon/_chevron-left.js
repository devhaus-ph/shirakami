import React from 'react'
import PropTypes from 'prop-types'

function ChevronLeft(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M15 6L9 12L15 18"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ChevronLeft.propTypes = {
  className: PropTypes.string,
}

export default ChevronLeft
