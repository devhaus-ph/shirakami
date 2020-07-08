import React from 'react'
import {
  Container,
  Flex,
  Titlebar,
  Toolbar,
  Sidebar,
  Button,
  Pagination,
  Field,
  Select,
} from '../src'

function App() {
  return (
    <Container>
      <Titlebar abbr="Q-PHN">Quirino - Public Health and Nutrition</Titlebar>
      <Flex direction="row">
        <Sidebar>
          <Sidebar.Menu>
            <Sidebar.Item>Item 1</Sidebar.Item>
            <Sidebar.Item>Item 2</Sidebar.Item>
            <Sidebar.Item>Item 3</Sidebar.Item>
            <Sidebar.Item>Item 4</Sidebar.Item>
            <Sidebar.Item>Item 5</Sidebar.Item>
            <Sidebar.Item>Item 6</Sidebar.Item>
            <Sidebar.Item>Item 7</Sidebar.Item>
            <Sidebar.Item>Item 8</Sidebar.Item>
            <Sidebar.Item>Item 9</Sidebar.Item>
            <Sidebar.Item>Item 10</Sidebar.Item>
            <Sidebar.Item>Item 11</Sidebar.Item>
            <Sidebar.Item>Item 12</Sidebar.Item>
            <Sidebar.Item>Item 13</Sidebar.Item>
            <Sidebar.Item>Item 14</Sidebar.Item>
            <Sidebar.Item>Item 15</Sidebar.Item>
            <Sidebar.Item>Item 16</Sidebar.Item>
            <Sidebar.Item>Item 17</Sidebar.Item>
            <Sidebar.Item>Item 18</Sidebar.Item>
            <Sidebar.Item>Item 19</Sidebar.Item>
            <Sidebar.Item>Item 20</Sidebar.Item>
            <Sidebar.Item>Item 21</Sidebar.Item>
            <Sidebar.Item>Item 22</Sidebar.Item>
            <Sidebar.Item>Item 23</Sidebar.Item>
            <Sidebar.Item>Item 24</Sidebar.Item>
            <Sidebar.Item>Item 25</Sidebar.Item>
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
            <Field.Label>Municipal</Field.Label>
            <Select>
              <Select.Option>Cabarroguis</Select.Option>
              <Select.Option>Diffun</Select.Option>
              <Select.Option>Saguday</Select.Option>
            </Select>
          </Field>
          <Field>
            <Field.Label>Barangay</Field.Label>
            <Select>
              <Select.Option>Gundaway</Select.Option>
              <Select.Option>Zamora</Select.Option>
              <Select.Option>Villamor</Select.Option>
            </Select>
          </Field>
          <Field>
            <Field.Label>Barangay</Field.Label>
            <Select>
              <Select.Option>Gundaway</Select.Option>
              <Select.Option>Zamora</Select.Option>
              <Select.Option>Villamor</Select.Option>
            </Select>
          </Field>
          <Field>
            <Field.Label>Barangay</Field.Label>
            <Select>
              <Select.Option>Gundaway</Select.Option>
              <Select.Option>Zamora</Select.Option>
              <Select.Option>Villamor</Select.Option>
            </Select>
          </Field>
          <Field>
            <Field.Label>Barangay</Field.Label>
            <Select>
              <Select.Option>Gundaway</Select.Option>
              <Select.Option>Zamora</Select.Option>
              <Select.Option>Villamor</Select.Option>
            </Select>
          </Field>
          <Field>
            <Field.Label>Barangay</Field.Label>
            <Select>
              <Select.Option>Gundaway</Select.Option>
              <Select.Option>Zamora</Select.Option>
              <Select.Option>Villamor</Select.Option>
            </Select>
          </Field>
          <h1>This is the end</h1>
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
