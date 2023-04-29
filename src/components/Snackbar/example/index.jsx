import React, { useState } from 'react'

import Snackbar from '../index'
import Button from '../../Button'
import Icon from '../../Icon'
import CopyIcon from '../../../icons/CopyIcon'
import Heading from '../../Heading'

const SnackbarExample = () => {
  const [showSnackbar, setShowSnackbar] = useState(false)

  const onClickHandler = () => {
    console.log('onClickHandler')
    setShowSnackbar(true)
  }

  return (
    <>
      <Heading variation="h4">Snackbar</Heading>
      {showSnackbar && (
        <Snackbar setShowSnackbar={setShowSnackbar}>
          copied to clipboard
        </Snackbar>
      )}
      <Button onClick={onClickHandler} intent="icon">
        <Icon size="25px">
          <CopyIcon />
        </Icon>
      </Button>
    </>
  )
}

export default SnackbarExample
