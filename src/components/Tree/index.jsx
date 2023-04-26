import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const TreeContainer = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-start;
`

const Node = styled.div`
  box-sizing: border-box;
  padding-left: 30px;
  border-left: 1px solid red;
  display: block;

  &[data-expanded='false'] {
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-in-out;
    max-height: 0px;
  }

  &[data-expanded='true'] {
    visibility: visible;
    opacity: 1;
    transition: all 0.1s ease-in-out;
    max-height: ${({ scrollHeight }) => scrollHeight + 'px'};
  }
`

// recursive function - destruct off props
const Tree = ({ data, depth = 0 }) => {
  const [childrenVisible, setChildrenVisible] = useState([])

  const openChildrenHandler = (depth, index) => {
    console.log(`depth: ${depth}, index:${index}`)
    const found = childrenVisible.includes(`${depth}-${index}`)
    if (found) {
      // filter-out
      //if index is in the activeIndexes array... remove it
      setChildrenVisible(
        childrenVisible.filter(item => item !== `${depth}-${index}`),
      )
    } else {
      //or add
      //add to activeIndexes = Set is unique values
      setChildrenVisible([
        ...new Set([...childrenVisible, `${depth}-${index}`]),
      ])
    }
  }

  return data.map(({ item, children }, index) => {
    const childRef = useRef()
    return (
      <TreeContainer
        key={`depth_${depth}_index_${index}`}
        style={{ display: 'inline-flex', flexDirection: 'column' }}
        data-depth={[`${depth}`]}
        data-node={[`${item}`]}
      >
        <div style={{ display: 'flex' }}>
          <button>{item}</button>
        </div>

        {children && (
          <>
            <button onClick={() => openChildrenHandler(depth, index)}>*</button>

            <Node
              ref={childRef}
              scrollHeight={String(childRef?.current?.scrollHeight)}
              style={{ display: 'flex', flexDirection: 'column' }}
              data-parent={[`${item}`]}
              data-expanded={
                childrenVisible.includes(`${depth}-${index}`) ? 'true' : 'false'
              }
            >
              <Tree data={children} depth={parseInt(depth) + 1} parent={item} />
            </Node>
          </>
        )}
      </TreeContainer>
    )
  })
}

export default Tree
