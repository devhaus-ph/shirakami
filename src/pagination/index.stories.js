import React from 'react'
import { Pagination } from '../'

export default {
  title: 'Elements/Pagination',
  component: Pagination,
}

export const basic = () => {
  function navigate(data) {
    alert('Page number: ' + data)
  }

  return <Pagination activePage={6} totalPages={10} onClick={navigate} />
}
