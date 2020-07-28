import React from 'react'
import { Toolbar, Button } from '../'

export default {
  title: 'Layouts/Toolbar',
  component: Toolbar,
}

export const basic = () => (
  <Toolbar>
    <Button variant="icon" icon="plus" />
    <Button variant="icon" icon="filter" />
    <Button variant="icon" icon="download" />
  </Toolbar>
)
