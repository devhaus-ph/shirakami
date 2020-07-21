import React from 'react'
import { Flex } from '../'

export default {
  title: 'Layouts/Flex',
  component: Flex,
}

export const basic = () => (
  <Flex>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Flex>
)

export const column = () => (
  <Flex column>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Flex>
)

export const fullwidth = () => (
  <Flex fullwidth>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Flex>
)
