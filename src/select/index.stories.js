import React from 'react'
import { Select } from '../'

export default {
  title: 'Elements/Select',
  component: Select,
}

export const basic = () => (
  <Select>
    <Select.Option>Option One</Select.Option>
    <Select.Option>Option Two</Select.Option>
    <Select.Option>Option Three</Select.Option>
  </Select>
)
