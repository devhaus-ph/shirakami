import React from 'react'
import { Form, Button, Field, Input } from '../'

export default {
  title: 'Layouts/Form',
  component: Form,
}

export const basic = () => (
  <Form title="User Form" description="Create new user.">
    <Form.Section title="Personal Details">
      <Field label="Name">
        <Input />
      </Field>
      <Field label="Birthday">
        <Input type="date" />
      </Field>
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
