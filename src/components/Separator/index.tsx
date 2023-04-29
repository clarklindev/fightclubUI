import React from 'react'
import styled from 'styled-components'

type SeparatorVariation = 'horizontal' | 'vertical' | 'horizontal-labelled'

type SeparatorProps = {
  variation?: SeparatorVariation
  width?: string
  height?: string
  margin?: string
  label?: string
}

const SeparatorContainer = styled.div`
  box-sizing: border-box;
  display: flex;
`

const SeparatorHorizontal = styled(SeparatorContainer)<{
  height: string
  width: string
  margin: string
}>`
  display: flex;
  width: 100%;
  height: 1px;
  margin: ${({ margin }) => margin};
  background: var(--border-color);
`

const SeparatorVertical = styled(SeparatorContainer)<{
  height: string
  width: string
  margin: string
}>`
  height: ${({ height }) => height};
  width: 1px;
  margin: ${({ margin }) => margin};
  background: var(--border-color);
`

const SeparatorHorizontalLabelled = styled(SeparatorContainer)<{
  margin: string
  height: string
  width: string
}>`
  span {
    color: ${({ theme }) => theme?.Separator?.color};
    margin: ${({ margin }) => margin};
  }

  &::before {
    display: flex;
    align-self: center;
    content: '';
    background: var(--border-color);
    width: 100%;
    height: 1px;
  }
  &::after {
    display: flex;
    align-self: center;
    content: '';
    background: var(--border-color);
    width: 100%;
    height: 1px;
  }
`

const Separator: React.FC<SeparatorProps> = ({
  variation = 'horizontal',
  margin = '0px',
  height = 'inherit',
  width = 'inherit',
  label = undefined,
}: SeparatorProps) => {
  switch (variation) {
    case 'horizontal':
      return (
        <SeparatorHorizontal
          className="Separator"
          height={height}
          width={width}
          margin={margin}
        />
      )

    case 'vertical':
      return (
        <SeparatorVertical
          className="Separator"
          height={height}
          width={width}
          margin={margin}
        />
      )

    case 'horizontal-labelled':
      return (
        <SeparatorHorizontalLabelled
          className="Separator"
          height={height}
          width={width}
          margin={margin}
        >
          <span>{label}</span>
        </SeparatorHorizontalLabelled>
      )

    default:
      return null
  }
}

export default Separator
