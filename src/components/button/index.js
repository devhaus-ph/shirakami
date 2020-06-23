import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  let design = 'button--' + props.design
  const styleName = ['app__button', design, props.className].join(' ')

  return (
    <button className={styleName} onClick={props.onClick} title={props.title}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(['solid', 'outline', 'text', 'icon']),
  onClick: PropTypes.func,
  title: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  design: 'solid',
}

export default Button
