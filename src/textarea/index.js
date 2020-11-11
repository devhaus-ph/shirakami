import './styles.css'
import React from 'react'

function Textarea(props) {
  const { className, children, ...other } = props
  const styleName = ['sk-textarea', className].join(' ').trim()

  return (
    <textarea className={styleName} {...other}>
      {children}
    </textarea>
  )
}

export default Textarea
