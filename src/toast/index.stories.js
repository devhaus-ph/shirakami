import React, { useState } from 'react'
import { Toast, Button } from '../'

export default {
  title: 'Elements/Toast',
  component: Toast,
}

export const basic = () => {
  const [notify, setNotify] = useState(false)

  function showToast() {
    setNotify(true)
  }

  const toast = (
    <Toast active={notify} type="success">
      User created successfully
    </Toast>
  )

  return (
    <div>
      <Button onClick={showToast}>Yey</Button>
      {toast}
    </div>
  )
}
