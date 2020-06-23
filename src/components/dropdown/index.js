import './styles.css'
import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from '..'

const VISIBLE = 'dropdown__menu--active'

function Dropdown(props) {
  const refToggleButton = useRef()
  const [styleName, setStyleName] = useState({
    dropdownMenu: 'dropdown__menu',
    status: '',
  })

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [styleName])

  function handleClickOutside(e) {
    if (!refToggleButton.current.contains(e.target)) closeDropdownMenu()
  }

  function toggleDropdownMenu() {
    if (styleName.status !== VISIBLE) openDropdownMenu()
    if (styleName.status === VISIBLE) closeDropdownMenu()
  }

  function openDropdownMenu() {
    setStyleName({ ...styleName, status: VISIBLE })
  }

  function closeDropdownMenu() {
    setStyleName({ ...styleName, status: '' })
  }

  styleName.values = () => Object.values(styleName).join(' ')

  return (
    <div className="app__dropdown">
      <div
        className="dropdown__toggle"
        ref={refToggleButton}
        onClick={toggleDropdownMenu}>
        <Button design="icon">
          <Icon icon={props.toggleIcon} width={18} height={18} />
        </Button>
      </div>
      <ul className={styleName.values()}>{props.children}</ul>
    </div>
  )
}

Dropdown.Item = (props) => (
  <li className="dropdown__item" onClick={props.onClick}>
    <label>{props.children}</label>
  </li>
)

Dropdown.propTypes = {
  children: PropTypes.node,
}

Dropdown.Item.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Dropdown
