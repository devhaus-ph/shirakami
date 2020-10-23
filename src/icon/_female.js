import React from 'react'
import PropTypes from 'prop-types'

function Female(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z"
        stroke="#333333"
        strokeWidth="2"
      />
      <path d="M2 22L8 16" stroke="#333333" strokeWidth="2" />
      <path d="M2 16L8 22" stroke="#333333" strokeWidth="2" />
    </svg>
  )
}

Female.propTypes = {
  className: PropTypes.string,
}

export default Female
