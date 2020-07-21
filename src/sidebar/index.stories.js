import React from 'react'
import { Sidebar } from '../'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
}

export const basic = () => (
  <Sidebar>
    <Sidebar.Menu label="Menu">
      <Sidebar.Item active>Dashboard</Sidebar.Item>
      <Sidebar.Item>Users</Sidebar.Item>
    </Sidebar.Menu>

    <Sidebar.Menu label="Social Profile">
      <Sidebar.Item>Individuals</Sidebar.Item>
      <Sidebar.Item>Communities</Sidebar.Item>
    </Sidebar.Menu>

    <Sidebar.Menu label="Others">
      <Sidebar.Item>DRR Management</Sidebar.Item>
      <Sidebar.Item>Map Location</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>
)
