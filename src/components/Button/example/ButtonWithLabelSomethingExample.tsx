import React from 'react'

import Button from '../index'
import LabelSomething from '../../LabelSomething'
import Icon from '../../Icon'
import ThumbsUpIcon from '../../../icons/ThumbsUpIcon'

const ButtonWithLabelSomethingExample = () => {
  return (
    <Button
      variation="contained"
      onClick={() => {
        console.log('hello world')
      }}
      label={
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
      }
    />
  )
}

export default ButtonWithLabelSomethingExample
