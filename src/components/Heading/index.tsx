import React from 'react'

import styled from 'styled-components'

import { ThemeType } from '../../themes/LightTheme'

const HeadingBase = styled.div<{ theme: ThemeType }>`
  color: var(--clr-foreground);
  margin: ${({ theme }) => theme.Heading?.margin};
  line-height: ${({ theme }) => theme.Heading?.lineHeight};
  font-weight: ${({ theme }) => theme.Heading?.fontWeight};
  font-family: ${({ theme }) => theme.Heading?.fontFamily};
`

const Heading1 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h1};
`
const Heading2 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h2};
`
const Heading3 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h3};
`
const Heading4 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h4};
`
const Heading5 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h5};
`
const Heading6 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h6};
`

enum HeadingVariation {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

type HeadingVariationType = keyof typeof HeadingVariation
type HeadingVariationComponentType =
  | typeof Heading1
  | typeof Heading2
  | typeof Heading3
  | typeof Heading4
  | typeof Heading5
  | typeof Heading6

type HeadingProps = {
  variation: HeadingVariationType
  children: string
}

const Heading: React.FC<HeadingProps> = ({
  variation,
  children,
}: HeadingProps) => {
  const headingMap: Record<
    HeadingVariationType,
    HeadingVariationComponentType
  > = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
  }

  const Component = headingMap[variation]
  return <Component as={variation}>{children}</Component>
}

export default Heading
