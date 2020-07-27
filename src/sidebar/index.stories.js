import React from 'react'
import { Sidebar } from '../'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
}

export const basic = () => (
  <Sidebar>
    <Sidebar.Menu label="Menu">
      <a className="active">Dashboard</a>
      <a>Users</a>
    </Sidebar.Menu>

    <Sidebar.Menu label="Social Profile">
      <a>Individuals</a>
      <a>Communities</a>
    </Sidebar.Menu>

    <Sidebar.Menu label="Others">
      <a>DRR Management</a>
      <a>Q-PHN Map</a>
    </Sidebar.Menu>
  </Sidebar>
)
