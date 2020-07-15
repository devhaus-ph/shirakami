import React from 'react'
import { Dropdown } from '../'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}

export const basic = () => (
  <Dropdown>
    <Dropdown.Item>Option One</Dropdown.Item>
    <Dropdown.Item>Option Two</Dropdown.Item>
    <Dropdown.Item>Option Three</Dropdown.Item>
  </Dropdown>
)
