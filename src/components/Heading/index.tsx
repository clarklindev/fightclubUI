import React from 'react';

import { useTheme } from '@fightclub/context/ThemeContext';

type HeadingVariationType = keyof typeof HeadingVariation; //h1,h2,h3,h4,h5,h6

enum HeadingSize {
  level1 = '1.383rem',
  XXXL = '1.383rem',

  level2 = '1.296rem',
  XXL = '1.296rem',

  level3 = '1.215rem',
  XL = '1.215rem',

  level4 = '1.138rem',
  L = '1.138rem',

  level5 = '1.067rem',
  M = '1.067rem',

  level6 = '1rem',
  S = '1rem',

  level7 = '0.937rem',
  XS = '0.937rem',

  level8 = '0.878rem',
  XXS = '0.878rem',

  level9 = '0.823rem',
  XXXS = '0.823rem',
}

//defaults if size not specified
enum HeadingVariation {
  h1 = 'level1',
  h2 = 'level2',
  h3 = 'level3',
  h4 = 'level4',
  h5 = 'level5',
  h6 = 'level6',
}

const baseClasses = 'pt-1rem pb-1rem whitespace-break break-word';
// text-${theme?.Heading?.color}
// leading-${theme?.Heading?.lineHeight}
// font-${theme?.Heading?.fontWeight}
// font-${theme?.Heading?.fontFamily}

type HeadingProps = {
  as: HeadingVariationType; //h1,h2,h3,h4,h5,h6
  size: keyof typeof HeadingSize; //XXXS,XXS,XS,S,M,L,XL,XXL,XXXL | level1,level2,level3,level4,level5,level6,level7,level8,level9
  className?: string;
  children: string;
};

const Heading = ({ as, size, className, children, ...rest }: HeadingProps) => {
  //prop > theme > defaults

  //defaults
  let headerSize: string = HeadingSize[HeadingVariation[as]];

  //theme
  let { theme } = useTheme();
  if (theme) {
    headerSize = theme.Heading.fontSize[HeadingVariation[as]];
  }

  //prop
  if (size) {
    headerSize = HeadingSize[size];
  }

  const Variation = `${as}` as keyof JSX.IntrinsicElements;
  return (
    <Variation
      data-component={Heading.displayName}
      className={[baseClasses, className].join(' ')}
      style={{ fontSize: headerSize }}
      {...rest}>
      {children}
    </Variation>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

Heading.displayName = 'Heading';

export { Heading, type HeadingProps };
