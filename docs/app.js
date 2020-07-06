import React from 'react'
import {
  Container,
  Flex,
  Titlebar,
  Toolbar,
  Sidebar,
  Button,
  Checkbox,
  Input,
  Field,
  Dropdown,
  Form,
} from '../src'

function App() {
  return (
    <Container>
      <Titlebar>Shirakami UI by DevHaus Innovations</Titlebar>
      <Flex direction="row">
        <Sidebar>
          <Sidebar.Menu>
            <Sidebar.Item>Dashboard</Sidebar.Item>
            <Sidebar.Item>Users</Sidebar.Item>
            <Sidebar.Item>Profiles</Sidebar.Item>
            <Sidebar.Item>Location</Sidebar.Item>
          </Sidebar.Menu>

          <Sidebar.Menu>
            <Sidebar.Label>DRRM</Sidebar.Label>
            <Sidebar.Item>Health</Sidebar.Item>
          </Sidebar.Menu>
        </Sidebar>
        <Flex fullwidth>
          <h1>Users</h1>
          <p></p>

          <Form>
            <Form.Title>User Form</Form.Title>
            <Form.Description>Create new user.</Form.Description>
            <Form.Section>
              <Form.Label>Personal Details</Form.Label>

              <Field>
                <Field.Label>First Name</Field.Label>
                <Input />
                <Field.Message></Field.Message>
              </Field>

              <Field>
                <Field.Label>Middle Name</Field.Label>
                <Input />
                <Field.Message></Field.Message>
              </Field>

              <Field>
                <Field.Label>Last Name</Field.Label>
                <Input />
                <Field.Message></Field.Message>
              </Field>
            </Form.Section>
            <Form.Footer>
              <Button>Submit</Button>
              <Button variant="outline">Cancel</Button>
            </Form.Footer>
          </Form>
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
