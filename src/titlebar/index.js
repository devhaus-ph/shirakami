import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import Container from '../container'

function Titlebar(props) {
  const styleName = [props.component, props.className].join(' ').trim()
  return (
    <Container className={styleName}>
      <span className="titlebar-abbr">{props.abbr}</span>
      <span className="titlebar-title">{props.children}</span>
    </Container>
  )
}

Titlebar.propTypes = {
  abbr: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Titlebar.defaultProps = {
  component: 'titlebar',
}

export default Titlebar
