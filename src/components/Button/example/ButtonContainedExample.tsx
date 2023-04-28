import React from 'react'
import Button from '../index'

const ButtonContainedExample = () => {
  return (
    <Button
      intent="outlined"
      onClick={() => {
        console.log('hello world')
      }}
    >
      Contained
    </Button>
  )
}

export default ButtonContainedExample
