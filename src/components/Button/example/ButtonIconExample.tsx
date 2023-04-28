import React from 'react'
import Button from '../index'
import Icon from '../../Icon'
import ShoppingCartIcon from '../../../icons/ShoppingCartIcon'

const ButtonIconExample = () => {
  return (
    <Button
      intent="icon"
      onClick={() => {
        console.log('hello world')
      }}
    >
      <Icon size="25px">
        <ShoppingCartIcon />
      </Icon>
    </Button>
  )
}

export default ButtonIconExample
