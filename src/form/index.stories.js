import React from 'react'
import { Form, Button, Field, Input, Select } from '../'

export default {
  title: 'Layouts/Form',
  component: Form,
}

export const basic = () => (
  <Form title="User Form" description="Create new user.">
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
        <Field label="Name">
          <Input />
        </Field>
        <Field label="Birthday">
          <Select>
            <Select.Option>asdasdasdasdasdasd</Select.Option>
            <Select.Option>a</Select.Option>
            <Select.Option>b</Select.Option>
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
