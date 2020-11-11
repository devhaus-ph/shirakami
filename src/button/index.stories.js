import React from 'react'
import { Button } from '../'

export default {
  title: 'Elements/Button',
  component: Button,
}

export const basic = () => <Button className={false}>Button</Button>

export const variantSolid = () => <Button variant="solid">Button</Button>

export const variantOutline = () => <Button variant="outline">Button</Button>

export const variantText = () => <Button variant="text">Button</Button>

export const variantIcon = () => <Button variant="icon" icon="user" />

export const transparent = () => (
  <Button variant="icon" icon="user" transparent />
)

export const disabled = () => <Button disabled>Button</Button>
