import React from 'react'

import styled from 'styled-components'

export type IconProps = {
  size?: string
  fill?: string
  stroke?: string
  fillOpacity?: string
  children?: React.ReactNode
}

const IconContainer = styled.div<
  Omit<IconProps, 'children'> & {
    size: string
    stroke?: string
    fill?: string
    fillOpacity?: string
  }
>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  > * {
    width: 100%;
    height: 100%;
  }
  > svg {
    width: 100%;
    height: 100%;
    stroke: ${({ theme, stroke }) =>
      stroke ? stroke : theme?.Icon?.stroke || 'var()'};
    fill: ${({ theme, fill }) => (fill ? fill : theme?.Icon?.fill || 'var()')};
    fill-opacity: ${({ theme, fillOpacity }) =>
      fillOpacity ? fillOpacity : theme?.Icon?.fillOpacity || 'var()'};
  }
`

const Icon: React.FC<IconProps> = ({
  stroke,
  children,
  size = '25px',
  fill = undefined,
  fillOpacity,
  ...rest
}) => {
  return (
    <IconContainer
      className="Icon"
      size={size}
      stroke={stroke}
      fill={fill}
      fillOpacity={fillOpacity}
      {...rest}
    >
      {children}
    </IconContainer>
  )
}

export default Icon
