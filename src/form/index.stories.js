import React from 'react'
import { Form, Button, Field, Input, Select } from '../'

export default {
  title: 'Layouts/Form',
  component: Form,
}

export const basic = () => {
  function submitForm(e) {
    e.preventDefault()
    alert('ahoy!')
  }

  return (
    <Form
      title="User Form"
      description="Create new user."
      onSubmit={submitForm}>
      <Form.Section title="Personal Details">
        <Form.Row>
          <Field label="Name">
            <Input />
          </Field>
          <Field label="Birthday">
            <Input type="date" />
          </Field>
        </Form.Row>
        <Form.Row>
          <Field label="Office">
            <Input />
          </Field>
          <Field label="Status">
            <Select>
              <Select.Option>Active</Select.Option>
              <Select.Option>Inactive</Select.Option>
            </Select>
          </Field>
        </Form.Row>
      </Form.Section>

      <Form.Section title="Account Details">
        <Field label="Email">
          <Input type="email" />
        </Field>
        <Field label="Password">
          <Input type="password" />
        </Field>
      </Form.Section>

      <Form.Footer>
        <Button>Submit</Button>
        <Button variant="text">Cancel</Button>
      </Form.Footer>
    </Form>
  )
}
