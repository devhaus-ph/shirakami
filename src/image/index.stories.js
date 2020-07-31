import React from 'react'
import { Image } from '../'

export default {
  title: 'Elements/Image',
  component: Image,
}

export const basic = () => (
  <Image
    src="https://picsum.photos/200/300?random=1&grayscale"
    height={64}
    width={64}
    rounded
  />
)
