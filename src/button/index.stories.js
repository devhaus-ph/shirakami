import React from 'react'
import { Button } from '../'

export default {
  title: 'Button',
  component: Button,
}

export const basic = () => <Button>Button</Button>

export const variantSolid = () => <Button variant="solid">Button</Button>

export const variantOutline = () => <Button variant="outline">Button</Button>

export const variantText = () => <Button variant="text">Button</Button>

export const variantIcon = () => <Button variant="icon" icon="user" />
