import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function AppTitle(props) {
  return <p className="app__title">{props.children}</p>
}

AppTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

export default AppTitle
