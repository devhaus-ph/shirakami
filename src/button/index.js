import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../src'

function Button(props) {
  let styleName = [props.component, props.className, props.variant]
  styleName = styleName.join(' ').trim()

  let buttonIcon = <></>
  if (props.icon) {
    buttonIcon = <Icon icon={props.icon} iconSize={props.iconSize} />
  }

  return (
    <button className={styleName} onClick={props.onClick} title={props.title}>
      {buttonIcon}
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClick: PropTypes.func,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'outline', 'text', 'icon']),
}

Button.defaultProps = {
  className: '',
  component: 'button',
  icon: '',
  iconSize: 24,
  variant: 'solid',
}

export default Button
