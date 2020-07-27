import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'

function Button(props) {
  let className = ['button', props.variant, props.className]
  let btnIcon = <div className="hidden" />

  className = className.join(' ').trim()
  btnIcon = props.icon && <Icon icon={props.icon} iconSize={props.iconSize} />

  return (
    <button className={className} onClick={props.onClick} title={props.title}>
      {btnIcon}
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClick: PropTypes.func,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'outline', 'text', 'icon']),
}

Button.defaultProps = {
  className: '',
  iconSize: 24,
  variant: 'solid',
}

export default Button
