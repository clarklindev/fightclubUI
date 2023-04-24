import React from 'react';
import styled from 'styled-components';

import { ThemeType } from '../../themes/DefaultTheme';

// ---------------------------------------------------------------------------------------------------------------------

type LayoutSectionProps = { theme: ThemeType };
const LayoutSection = styled.section<{ theme?: LayoutSectionProps }>`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.Layout?.section?.padding};
  border-bottom: ${({ theme }) => theme.Layout?.section?.borderBottom};
`;

type LayoutBlockProps = { theme?: ThemeType };
const LayoutBlock = styled.div<{ theme: LayoutBlockProps }>`
  position: relative;
  padding: ${({ theme }) => theme.Layout?.block?.padding};
`;

enum LayoutVariation {
  section = 'section',
  block = 'block',
}

// ---------------------------------------------------------------------------------------------------------------------

type LayoutVariationType = keyof typeof LayoutVariation;
type LayoutStyledComponentType = typeof LayoutSection | typeof LayoutBlock;

interface LayoutProps {
  variation: LayoutVariationType;
  label?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  label,
  children,
  variation,
}: LayoutProps) => {
  const layoutMap: Record<LayoutVariationType, LayoutStyledComponentType> = {
    section: LayoutSection,
    block: LayoutBlock,
  };

  const Component = layoutMap[variation];

  return <Component>{label ? label : children}</Component>;
};

export default Layout;
