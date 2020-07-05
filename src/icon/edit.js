import React from 'react'
import PropTypes from 'prop-types'

function Edit(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M17 3.82843C17.2626 3.56578 17.5744 3.35744 17.9176 3.2153C18.2608 3.07316 18.6286 3 19 3C19.3714 3 19.7392 3.07316 20.0824 3.2153C20.4256 3.35744 20.7374 3.56578 21 3.82843C21.2626 4.09107 21.471 4.40287 21.6131 4.74603C21.7553 5.0892 21.8284 5.45699 21.8284 5.82843C21.8284 6.19986 21.7553 6.56766 21.6131 6.91082C21.471 7.25398 21.2626 7.56578 21 7.82843L7.5 21.3284L2 22.8284L3.5 17.3284L17 3.82843Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Edit.propTypes = {
  className: PropTypes.string,
}

export default Edit
