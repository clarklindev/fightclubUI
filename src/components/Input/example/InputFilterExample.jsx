import React, { useState } from 'react'
import Input, { InputWrapper } from '../index'

import Button from '../../Button'
import Icon from '../../Icon'
import SearchIcon from '../../../icons/SearchIcon'
import ClearIcon from '../../../icons/ClearIcon'

const InputFilterExample = () => {
  const [savedData, setSavedData] = useState('')

  const clearHandler = () => {
    setSavedData('')
  }

  return (
    <InputWrapper>
      <Icon size="25px">
        <SearchIcon />
      </Icon>
      <Input
        savedData={savedData}
        border={false}
        placeholder="placeholder"
        onChange={event => {
          setSavedData(event.target.value)
        }}
      />

      {savedData.length > 0 && (
        <Button intent="icon" onClick={clearHandler}>
          <Icon size="25px">
            <ClearIcon />
          </Icon>
        </Button>
      )}
    </InputWrapper>
  )
}

export default InputFilterExample
