import './styles.css'
import React from 'react'

function Masonry(props) {
  const styleName = ['sk-masonry', props.className].join(' ').trim()
  return <section className={styleName}>{props.children}</section>
}

export default Masonry
