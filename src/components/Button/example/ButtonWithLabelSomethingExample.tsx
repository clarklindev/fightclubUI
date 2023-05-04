import React from 'react'

import Button from '../index'
import LabelSomething from '../../LabelSomething'
import Icon from '../../Icon'
import ThumbsUpIcon from '../../../icons/ThumbsUpIcon'

const ButtonWithLabelSomethingExample = () => {
  return (
    <Button
      intent="contained"
      className="bg-red-500 hover:bg-red-600 text-white"
      onClick={() => {
        console.log('hello world')
      }}
    >
      <LabelSomething
        gap="10px"
        label="right"
        labelDirection="right"
        something={
          <Icon size="25px" stroke="white">
            <ThumbsUpIcon />
          </Icon>
        }
      />
    </Button>
  )
}

export default ButtonWithLabelSomethingExample
