import React from 'react';
import styled from 'styled-components';

import { ThemeType } from '@swagfinger/themes/LightTheme';

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
enum FontSizes {
  level1 = '1.383rem',
  level2 = '1.296rem',
  level3 = '1.215rem',
  level4 = '1.138rem',
  level5 = '1.067rem',
  level6 = '1rem',
  level7 = '0.937rem',
  level8 = '0.878rem',
  level9 = '0.823rem',
}

enum HeadingSize {
  XXXL = FontSizes.level1,
  level1 = FontSizes.level1,

  XXL = FontSizes.level2,
  level2 = FontSizes.level2,

  XL = FontSizes.level3,
  level3 = FontSizes.level3,

  L = FontSizes.level4,
  level4 = FontSizes.level4,

  M = FontSizes.level5,
  level5 = FontSizes.level5,

  S = FontSizes.level6,
  level6 = FontSizes.level6,

  XS = FontSizes.level7,
  level7 = FontSizes.level7,

  XXS = FontSizes.level8,
  level8 = FontSizes.level8,

  XXXS = FontSizes.level9,
  level9 = FontSizes.level9,
}

export type HeadingProps = {
  variation: HeadingVariationType;
  size?: keyof typeof HeadingSize | undefined; //XXXS,XXS,XS,S,M,L,XL,XXL,XXXL | level1,level2,level3,level4,level5,level6
  className?: string;
  children: string;
};

type HeadingVariationType = keyof typeof HeadingVariation; //h1,h2,h3,h4,h5,h6
type HeadingVariationComponentType = typeof H1 | typeof H2 | typeof H3 | typeof H4 | typeof H5 | typeof H6; //reference to component H1,H2,H3,H4,H5,H6

export const Heading: React.FC<HeadingProps> = ({ variation, size, className, children, ...rest }) => {
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
    <Component as={variation} size={size ? HeadingSize[size] : undefined} className={className} {...rest}>
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

  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const H1 = styled(HeadingBase)<{ theme: ThemeType; size: string | undefined }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.level1};
  font-size: ${({ size }) => size !== undefined && size};
`;
export const H2 = styled(HeadingBase)<{ theme: ThemeType; size: string | undefined }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.level2};
  font-size: ${({ size }) => size !== undefined && size};
`;
export const H3 = styled(HeadingBase)<{ theme: ThemeType; size: string | undefined }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.level3};
  font-size: ${({ size }) => size !== undefined && size};
`;
export const H4 = styled(HeadingBase)<{ theme: ThemeType; size: string | undefined }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.level4};
  font-size: ${({ size }) => size !== undefined && size};
`;
export const H5 = styled(HeadingBase)<{ theme: ThemeType; size: string | undefined }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.level5};
  font-size: ${({ size }) => size !== undefined && size};
`;
export const H6 = styled(HeadingBase)<{ theme: ThemeType; size: string | undefined }>`
  font-size: ${({ theme }) => theme.Heading?.fontSize?.level6};
  font-size: ${({ size }) => size !== undefined && size};
`;
