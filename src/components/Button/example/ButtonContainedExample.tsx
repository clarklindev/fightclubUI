import React from 'react'
import Button from '../index'

const ButtonContainedExample = () => {
  return (
    <Button
      intent="contained"
      onClick={() => {
        console.log('hello world')
      }}
    >
      Contained
    </Button>
  )
}

export default ButtonContainedExample
