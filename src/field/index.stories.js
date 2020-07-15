import React from 'react'
import { Field, Input } from '../'

export default {
  title: 'Components/Field',
  component: Field,
}

export const basic = () => (
  <Field label="Name">
    <Input />
  </Field>
)

export const withMessage = () => (
  <Field label="Nameg" message="This field is required">
    <Input />
  </Field>
)
