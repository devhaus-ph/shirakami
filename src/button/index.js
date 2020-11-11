import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'

function Button(props) {
  // Separate HTML attribute props
  const {
    className,
    children,
    icon,
    iconSize,
    transparent,
    variant,
    ...other
  } = props

  // Build CSS classes
  const buttonStyle = 'sk-button'
  const isTransparent = transparent && 'sk-button-transparent'
  const buttonVariant = 'sk-button-' + variant
  let styleName = [buttonStyle, buttonVariant, isTransparent, className]
  styleName = styleName
    .filter(Boolean)
    .join(' ')
    .trim()

  // Create button icon
  let buttonIcon = <div className="sk-button-icon-hidden" />
  buttonIcon = icon && <Icon icon={icon} iconSize={iconSize} />

  return (
    <button className={styleName} {...other}>
      {buttonIcon}
      {children}
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  transparent: PropTypes.bool,
  variant: PropTypes.oneOf(['solid', 'outline', 'text', 'icon']),
}

Button.defaultProps = {
  iconSize: 24,
  variant: 'solid',
}

export default Button
