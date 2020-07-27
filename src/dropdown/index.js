import './styles.css'
import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Dropdown(props) {
  const refToggleButton = useRef()
  const [visibility, setVisibility] = useState(false)
  const openDropdownMenu = () => setVisibility(true)
  const closeDropdownMenu = () => setVisibility(false)
  let className = ['menu', visibility ? 'show' : ''].join(' ').trim()

  function toggleDropdownMenu() {
    visibility ? closeDropdownMenu() : openDropdownMenu()
  }

  function handleClickOutside(e) {
    if (!refToggleButton.current.contains(e.target)) closeDropdownMenu()
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [visibility])

  return (
    <div className="dropdown">
      <div ref={refToggleButton} onClick={toggleDropdownMenu}>
        <Button variant="icon" icon={props.icon} iconSize={props.iconSize} />
      </div>
      <dl className={className}>{props.children}</dl>
    </div>
  )
}

/*-------------------
    Sub Component
-------------------*/
Dropdown.Item = props => {
  let className = ['item', props.className].join(' ').trim()

  return (
    <dt className={className} onClick={props.onClick}>
      {props.children}
    </dt>
  )
}

/*----------------
    Prop Types
----------------*/
Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
}

Dropdown.Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
}

/*-------------------
    Default Props
-------------------*/
Dropdown.defaultProps = {
  icon: 'more',
  iconSize: 18,
}

export default Dropdown
