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

// https://typescale.com/
//Inter
//Minor scale

enum HeadingSize {
  XXXS = '0.823rem',
  XXS = '0.878rem',
  XS = '0.937rem',
  S = '1rem',
  M = '1.067rem',
  L = '1.138rem',
  XL = '1.215rem',
  XXL = '1.296rem',
  XXXL = '1.383rem',
}

type HeadingProps = {
  variation: HeadingVariationType;
  size?: keyof typeof HeadingSize; //XXXS,XXS,XS,S,M,L,XL,XXL,XXXL
  className?: string;
  children: string;
};

type HeadingVariationType = keyof typeof HeadingVariation; //h1,h2,h3,h4,h5,h6
type HeadingVariationComponentType = typeof H1 | typeof H2 | typeof H3 | typeof H4 | typeof H5 | typeof H6; //reference to component H1,H2,H3,H4,H5,H6

export const Heading: React.FC<HeadingProps> = ({ variation, size = 'S', className, children }) => {
  const headingMap: Record<HeadingVariationType, HeadingVariationComponentType> = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
  };

  const Component = headingMap[variation];

  return (
    <Component as={variation} size={size} className={className}>
      {children}
    </Component>
  );
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

export const H1 = styled(HeadingBase)<{ theme: ThemeType; size: string }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h1};
  font-size: ${({ size }) => size !== '' && size};
`;
export const H2 = styled(HeadingBase)<{ theme: ThemeType; size: string }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h2};
  font-size: ${({ size }) => size !== '' && size};
`;
export const H3 = styled(HeadingBase)<{ theme: ThemeType; size: string }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h3};
  font-size: ${({ size }) => size !== '' && size};
`;
export const H4 = styled(HeadingBase)<{ theme: ThemeType; size: string }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h4};
  font-size: ${({ size }) => size !== '' && size};
`;
export const H5 = styled(HeadingBase)<{ theme: ThemeType; size: string }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h5};
  font-size: ${({ size }) => size !== '' && size};
`;
export const H6 = styled(HeadingBase)<{ theme: ThemeType; size: string }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.h6};
  font-size: ${({ size }) => size !== '' && size};
`;
