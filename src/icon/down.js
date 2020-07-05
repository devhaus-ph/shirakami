import React from 'react'
import PropTypes from 'prop-types'

function Down(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M6 9L12 15L18 9"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Down.propTypes = {
  className: PropTypes.string,
}

export default Down
