import React from 'react'
import Heading from '../components/Heading'
import Text from '../components/Text'

const Introduction = () => {
  return (
    <div>
      <Heading variation="h4">Introduction</Heading>
      <Text>
        Swagfinger-UI is a design system meant for an easier developer
        experience.
      </Text>
      <Text>It uses Styled-Components and TailwindCSS under the hood</Text>
    </div>
  )
}

export default Introduction
