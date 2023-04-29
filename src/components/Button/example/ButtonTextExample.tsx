import React from 'react'
import Button from '../index'

const ButtonTextExample = () => {
  return (
    <Button
      intent="text"
      onClick={() => {
        console.log('hello world')
      }}
    >
      Text
    </Button>
  )
}

export default ButtonTextExample
