import React from 'react'
import { Field, Input } from '../'

export default {
  title: 'Layouts/Field',
  component: Field,
}

export const basic = () => (
  <Field label="Name">
    <Input />
  </Field>
)

export const withMessage = () => (
  <Field label="Birthday" message="This field is required">
    <Input type="date" />
  </Field>
)
