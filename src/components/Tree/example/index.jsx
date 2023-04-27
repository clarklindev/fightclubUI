import React from 'react'

import Tree from '../index'
import Heading from '../../Heading'

// only endnodes can be links
const TreeExample = () => {
  const data = [
    {
      label: 'Design System',
      children: [
        { label: 'Routing', path: '/routing' },
        { label: 'Themes', path: '/themes' },
        { label: 'Styling', path: '/styling' },
        { label: 'Layout', path: '/layout' },
        { label: 'Hooks', path: '/hooks' },
        {
          label: 'Components',
          children: [
            {
              label: 'Form Inputs',
              children: [
                { label: 'RadioButton', path: '/radiobutton' },
                { label: 'RadioButton Group', path: '/radiobuttongroup' },
                { label: 'Checkbox', path: '/checkbox' },
                { label: 'Checkbox Group', path: '/checkboxgroup' },
                { label: 'Toggle Button', path: '/togglebutton' },
                { label: 'Toggle Switch', path: '/toggleswitch' },
                { label: 'Input', path: '/input' },
                { label: 'Counter', path: '/counter' },
                { label: 'Select', path: '/select' },
                { label: 'Slider', path: '/slider' },
                { label: 'Slider (Multirange)', path: '/slidermultirange' },
                { label: 'Text', path: '/text' },
              ],
            },
            {
              label: 'Elements',
              children: [
                { label: 'Button', path: '/button' },
                { label: 'Icon', path: '/icon' },
                { label: 'Heading', path: '/heading' },
                { label: 'LabelSomething', path: '/labelsomething' },
                { label: 'Accordion', path: '/accordion' },
                { label: 'Snackbar', path: '/snackbar' },
                { label: 'List', path: '/list' },
                { label: 'Table', path: '/table' },
                { label: 'Separator', path: '/separator' },
                { label: 'Card', path: '/card' },
                { label: 'Tree', path: '/tree' },
              ],
            },
          ],
        },
      ],
    },
  ]

  // requires data to be structured with "label" and "children" properties
  return (
    <>
      <Heading variation="h4">Tree</Heading>
      <Tree data={data} />
    </>
  )
}

export default TreeExample
