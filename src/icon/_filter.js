import React from 'react'
import PropTypes from 'prop-types'

function Filter(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Filter.propTypes = {
  className: PropTypes.string,
}

export default Filter
