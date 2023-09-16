import React from 'react';
import styled from 'styled-components';

import { ThemeType } from '../../themes/LightTheme';

type LayoutStyledComponentProps = { theme?: ThemeType };

type LayoutVariationType = keyof typeof LayoutVariation;
type LayoutStyledComponentType = typeof LayoutSection | typeof LayoutBlock;

type LayoutProps = {
  variation: LayoutVariationType;
  label?: string;
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ label, children, variation }: LayoutProps) => {
  const layoutMap: Record<LayoutVariationType, LayoutStyledComponentType> = {
    section: LayoutSection,
    block: LayoutBlock,
  };

  const Component = layoutMap[variation];

  return <Component>{label ? label : children}</Component>;
};

// ---------------------------------------------------------------------------------------------------------------------

const LayoutSection = styled.section<LayoutStyledComponentProps>`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.Layout?.section?.padding};
  border-bottom: ${({ theme }) => theme.Layout?.section?.borderBottom};
`;

const LayoutBlock = styled.div<LayoutStyledComponentProps>`
  position: relative;
  padding: ${({ theme }) => theme.Layout?.block?.padding};
`;

enum LayoutVariation {
  section = 'section',
  block = 'block',
}
