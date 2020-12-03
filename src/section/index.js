import './styles.css'
import React from 'react'

function Section(props) {
  // Build CSS classes
  const styleName = ['sk-section', props.className].join(' ').trim()

  return (
    <section className={styleName}>
      <h1 className="sk-section-title">{props.title}</h1>
      {props.children}
    </section>
  )
}

/*--  Sub Component  --*/
Section.Row = props => {
  // Build CSS classes
  const styleName = ['sk-section-row', props.className].join(' ').trim()
  return <div className={styleName}>{props.children}</div>
}

Section.Item = props => {
  // Build CSS classes
  const styleName = ['sk-section-item', props.className].join(' ').trim()

  return (
    <div className={styleName}>
      <label className="sk-section-label">{props.label}</label>
      {props.children}
    </div>
  )
}

export default Section
