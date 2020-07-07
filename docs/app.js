import React from 'react'
import {
  Container,
  Flex,
  Titlebar,
  Toolbar,
  Sidebar,
  Button,
  Modal,
  Section,
  Field,
  Input,
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
          <Toolbar direction="row">
            <Button variant="icon" icon="add" />
            <Modal icon="filter">
              <Section title="Filter">
                <Field>
                  <Field.Label>Name</Field.Label>
                  <Input />
                </Field>
                <Field>
                  <Field.Label>Role</Field.Label>
                  <Input />
                </Field>
                <Field>
                  <Field.Label>Status</Field.Label>
                  <Input />
                </Field>
              </Section>
              <Section title="Sort">
                <Field>
                  <Field.Label>Municipal</Field.Label>
                  <Input />
                </Field>
                <Field>
                  <Field.Label>Barangay</Field.Label>
                  <Input />
                </Field>
              </Section>
            </Modal>
            <Button variant="icon" icon="refresh" />
          </Toolbar>
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
