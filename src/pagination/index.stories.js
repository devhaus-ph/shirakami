import React from 'react'
import { Pagination } from '../'

export default {
  title: 'Elements/Pagination',
  component: Pagination,
}

export const basic = () => <Pagination activePage={1} totalPages={10} />
