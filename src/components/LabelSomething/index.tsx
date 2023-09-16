import React from 'react';
import styled from 'styled-components';

type LabelSomethingDirection = 'left' | 'right' | 'top' | 'bottom';
type FlexDirection = 'row-reverse' | 'row' | 'column-reverse' | 'column';

type LabelSomethingProps = {
  label: string;
  something: React.ReactNode;
  labelDirection?: LabelSomethingDirection;
  gap?: string;
  labelClickable?: boolean;
};

export const LabelSomething: React.FC<LabelSomethingProps> = ({
  label,
  something,
  gap = '2px',
  labelDirection = 'right',
  labelClickable = false,
}) => {
  const positionMap: Record<LabelSomethingDirection, FlexDirection> = {
    left: 'row-reverse',
    right: 'row',
    top: 'column-reverse',
    bottom: 'column',
  };

  return (
    <Container as={labelClickable ? 'label' : 'div'} labelDirection={positionMap[labelDirection]} gap={gap}>
      {something}
      <div>{label}</div>
    </Container>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const Container = styled.div<{
  labelDirection: FlexDirection;
  gap: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  flex-direction: ${({ labelDirection }) => labelDirection};
  gap: ${({ gap }) => gap};
`;
