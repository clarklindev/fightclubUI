import React from 'react'

import styled from 'styled-components'
import Icon from '../Icon'
import ChevronDownIcon from '../../icons/ChevronDownIcon'

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .Icon {
    right: ${({ theme }) => theme?.Select?.padding};
    position: absolute;
    pointer-events: none;
  }
`

const SelectContainer = styled.select`
  -webkit-appearance: none;

  box-sizing: border-box;
  appearance: none;
  margin: 0;
  width: 100%;
  outline: none;
  cursor: pointer;  
  max-height: ${({ theme }) => theme?.Select?.inputHeight};
  height: ${({ theme }) => theme?.Select?.inputHeight};
  color: currentColor;
  border: ${({ theme }) => theme?.Select?.border};
  border-radius: ${({ theme }) => theme?.Select?.borderRadius};
  padding: ${({ theme }) => theme?.Select?.inputPadding};
  
}`

const Select = ({ savedData, onChange, children }) => {
  const onChangeHandler = event => {
    onChange(event)
  }

  return (
    <SelectWrapper>
      <SelectContainer value={savedData} onChange={onChangeHandler}>
        {children
          ? children.map(each => {
              return each
            })
          : null}
      </SelectContainer>
      <Icon className="Icon" iconSize="30px">
        <ChevronDownIcon />
      </Icon>
    </SelectWrapper>
  )
}

export default Select
