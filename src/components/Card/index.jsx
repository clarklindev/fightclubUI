import React from 'react'
import styled from 'styled-components'
import { MODIFIERS } from './modifiers'

const CardContainer = styled.div`
  border: ${({ borderColor, theme }) =>
    borderColor
      ? `1px solid ${borderColor}`
      : `1px solid ${theme.borderColor}`};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 15px;
`

const Card = ({
  color = 'white',
  borderColor = 'black',
  borderRadius = '10px',
  width = '250px',
  height = '300px',
  children,
  modifiers = [],
}) => {
  return (
    <CardContainer
      color={color}
      borderColor={borderColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
      modifiers={Array.isArray(modifiers) ? [...modifiers] : modifiers}
    >
      {children}
    </CardContainer>
  )
}

export default Card
