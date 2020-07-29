import React from 'react'
import PropTypes from 'prop-types'

function Plus(props) {
  return (
    <svg
      className={props.className}
      width={props.height}
      height={props.width}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 5V19"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Plus.propTypes = {
  className: PropTypes.string,
}

export default Plus
