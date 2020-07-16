import React from 'react'
import { Sidebar } from '../'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
}

export const basic = () => (
  <Sidebar>
    <Sidebar.Menu label="Menu">
      <Sidebar.Item>Item One</Sidebar.Item>
      <Sidebar.Item>Item Two</Sidebar.Item>
      <Sidebar.Item>Item Three</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>
)
