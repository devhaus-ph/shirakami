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
          <Toolbar direction="row">
            <Button variant="icon" icon="add" />
            <Button variant="icon" icon="filter" />
            <Button variant="icon" icon="refresh" />
          </Toolbar>

          <Field>
            <Field.Label>First Name</Field.Label>
            <Input />
            <Field.Message></Field.Message>
          </Field>

          <Field>
            <Field.Label>Forms</Field.Label>
            <Checkbox>Form 137</Checkbox>
            <Checkbox>Birth Certificate</Checkbox>
            <Checkbox>Enrolment Form</Checkbox>
            <Checkbox>School ID</Checkbox>
            <Checkbox>ID 2x2</Checkbox>
            <Field.Message></Field.Message>
          </Field>
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
