import './styles.css'
import React from 'react'

function Toolbar(props) {
  // Build CSS classes
  const styleName = ['sk-toolbar', props.className].join(' ').trim()

  return <div className={styleName}>{props.children}</div>
}

export default Toolbar
