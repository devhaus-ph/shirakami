import React from 'react'
import PropTypes from 'prop-types'

function Save(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 21V13H7V21"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3V8H15"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Save.propTypes = {
  className: PropTypes.string,
}

export default Save
