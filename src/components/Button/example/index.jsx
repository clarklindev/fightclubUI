import React from 'react'

import ButtonContainedExample from './ButtonContainedExample'
import ButtonOutlinedExample from './ButtonOutlinedExample'
import ButtonTextExample from './ButtonTextExample'
import ButtonIconExample from './ButtonIconExample'
import ButtonWithLabelSomethingExample from './ButtonWithLabelSomethingExample'

import Button from '../index'

import Heading from '../../Heading'
import Layout from '../../Layout'

const ButtonExample = () => {
  return (
    <>
      <Heading variation="h4">Button</Heading>
      <Button tw="bg-red-500 hover:bg-red-600" intent="primary" size="medium">
        Click me
      </Button>

      {/* <Layout variation="block">
        <Heading variation='h5'>Contained button</Heading>
        <ButtonContainedExample />
      </Layout>

      <Layout variation="block">
        <Heading variation='h5'>Outlined button</Heading>
        <ButtonOutlinedExample />
      </Layout>

      <Layout variation="block">
        <Heading variation='h5'>Text button</Heading>
        <ButtonTextExample />
      </Layout>

      <Layout variation="block">
        <Heading variation='h5'>Icon button</Heading>
        <ButtonIconExample />
      </Layout>

      <Layout variation="block">
        <Heading variation='h5'>Button+LabelSomething button</Heading>
        <ButtonWithLabelSomethingExample />
      </Layout> */}
    </>
  )
}

export default ButtonExample
