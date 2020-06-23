import React from 'react'

function Add(props) {
  return (
    <svg
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

export default Add
