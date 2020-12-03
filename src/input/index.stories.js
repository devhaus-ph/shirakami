import React from 'react'
import { Input } from '../index'

export default {
  title: 'Elements/Input',
  component: Input,
}

export const basic = () => (
  <div>
    <Input pattern="[0-9]" number />
  </div>
)
