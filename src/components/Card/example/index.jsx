import React from 'react'

import Card from '../index'
import Heading from '../../Heading'

const CardExample = () => {
  return (
    <>
      <Heading variation="h4">Card</Heading>
      <Card
        color="white"
        borderColor="#DDD"
        borderRadius="10px"
        width="550px"
        height="300px"
        modifiers="shadow"
      >
        this is dummy text
      </Card>
    </>
  )
}

export default CardExample
