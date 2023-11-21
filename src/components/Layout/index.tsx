import React from 'react';
import styled from 'styled-components';

import { ThemeType } from '@swagfinger/themes/LightTheme';

type LayoutStyledComponentProps = { theme?: ThemeType };

type LayoutVariationType = keyof typeof LayoutVariation;
type LayoutStyledComponentType = typeof LayoutSection | typeof LayoutBlock;

type LayoutProps = {
  variation: LayoutVariationType;
  className?: string;
  label?: string;
  children?: React.ReactNode;
};

const Layout = ({ label, children, variation, className }: LayoutProps) => {
  const layoutMap: Record<LayoutVariationType, LayoutStyledComponentType> = {
    section: LayoutSection,
    block: LayoutBlock,
  };

  const Component = layoutMap[variation];

  return (
    <Component data-component="Layout" className={className}>
      {label ? label : children}
    </Component>
  );
};

// ---------------------------------------------------------------------------------------------------------------------

const LayoutSection = styled.section<LayoutStyledComponentProps>`
  padding: ${({ theme }) => theme.Layout?.section?.padding};
  border-bottom: ${({ theme }) => theme.Layout?.section?.borderBottom};
`;

const LayoutBlock = styled.div<LayoutStyledComponentProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.Layout?.block?.padding};

  &:last-of-type {
    padding-bottom: 0;
  }
`;

enum LayoutVariation {
  section = 'section',
  block = 'block',
}

Layout.displayName = 'Layout';
export { Layout };
