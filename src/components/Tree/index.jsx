import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import ChevronRightIcon from '../../icons/ChevronRightIcon'
import ChevronDownIcon from '../../icons/ChevronDownIcon'

const TreeContainer = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-start;
`

const Node = styled.div`
  box-sizing: border-box;
  padding-left: 20px;
  border-left: 1px solid red;
  display: block;

  &[data-expanded='false'] {
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-out;
    max-height: 0px;
  }

  &[data-expanded='true'] {
    visibility: visible;
    opacity: 1;
    transition: all 0.1s ease-out;
    max-height: auto;
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data.map(({ item, children = undefined }, index) => {
        const childRef = useRef()
        return (
          <TreeContainer
            key={`depth_${depth}_index_${index}`}
            style={{ display: 'inline-flex', flexDirection: 'column' }}
            data-depth={[`${depth}`]}
            data-node={[`${item}`]}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {children && (
                  <button onClick={() => openChildrenHandler(depth, index)}>
                    <Icon size="15px">
                      {childrenVisible.includes(`${depth}-${index}`) ? (
                        <ChevronDownIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </Icon>
                  </button>
                )}
                {!children && '•'}
                <button>{item}</button>
              </div>

              {children && (
                <Node
                  ref={childRef}
                  scrollHeight={String(childRef?.current?.scrollHeight)}
                  style={{ display: 'flex', flexDirection: 'column' }}
                  data-parent={[`${item}`]}
                  data-expanded={
                    childrenVisible.includes(`${depth}-${index}`)
                      ? 'true'
                      : 'false'
                  }
                >
                  <Tree
                    data={children}
                    depth={parseInt(depth) + 1}
                    parent={item}
                  />
                </Node>
              )}
            </div>
          </TreeContainer>
        )
      })}
    </div>
  )
}

export default Tree
