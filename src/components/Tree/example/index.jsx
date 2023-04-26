import React from 'react'

import Tree from '../index'
import Heading from '../../Heading'

const TreeExample = () => {
  const data = [
    {
      item: 'Percy',
      children: [
        { item: 'Jack', link: '' },
        { item: 'Ben', link: '' },
        {
          item: 'John',
          children: [
            { item: 'Alex', link: '' },
            {
              item: 'Sam',
              children: [
                { item: 'Pam', children: [{ item: 'Rick', link: '' }] },
              ],
            },
          ],
        },
        {
          item: 'Beth',
          children: [{ item: 'Ned', link: '' }],
        },
      ],
    },
    {
      item: 'Ned',
      children: [{ item: 'Seth', children: [{ item: 'Tyron', link: '' }] }],
    },
  ]

  // requires data to be structured with "item" and "children" properties
  return (
    <>
      <Heading variation="h4">Tree</Heading>
      <Tree data={data} />
    </>
  )
}

export default TreeExample
