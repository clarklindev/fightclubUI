import React from 'react';
import styled from 'styled-components';

import { ThemeType } from '../../themes/LightTheme';

enum HeadingVariation {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

type HeadingVariationType = keyof typeof HeadingVariation;
type HeadingVariationComponentType = typeof h1 | typeof h2 | typeof h3 | typeof h4 | typeof h5 | typeof h6;

type HeadingProps = {
  variation: HeadingVariationType;
  children: string;
};

export const Heading: React.FC<HeadingProps> = ({ variation, children }) => {
  const headingMap: Record<HeadingVariationType, HeadingVariationComponentType> = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
  };

  const Component = headingMap[variation];
  return <Component as={variation}>{children}</Component>;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const HeadingBase = styled.div<{ theme: ThemeType }>`
  color: var(--clr-foreground);
  line-height: ${({ theme }) => theme.Heading?.lineHeight};
  font-weight: ${({ theme }) => theme.Heading?.fontWeight};
  font-family: ${({ theme }) => theme.Heading?.fontFamily};
  white-space: break-word;
  overflow-wrap: break-word;
  margin: 1.5rem 0 1rem;
`;

const h1 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h1};
`;
const h2 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h2};
`;
const h3 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h3};
`;
const h4 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h4};
`;
const h5 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h5};
`;
const h6 = styled(HeadingBase)<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h6};
`;
