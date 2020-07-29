import React from 'react'
import PropTypes from 'prop-types'

function ChevronRight(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M9 18L15 12L9 6"
        stroke="#333333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

ChevronRight.propTypes = {
  className: PropTypes.string,
}

export default ChevronRight
