import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Title({ title, desc }) {
  return (
    <div className="sk-title-container">
      <h1 className="sk-title">{title}</h1>
      <p className="sk-title-desc">{desc}</p>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}

Title.displayName = 'Title'

export default Title
