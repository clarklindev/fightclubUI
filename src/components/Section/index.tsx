import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin-bottom: 2rem;

  // children's last child has no margin bottom
  > :last-child {
    margin-bottom: 0;
  }

  // Check if this section is the last among its siblings
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Section = ({ children, className = '' }: { className?: string; children: React.ReactNode }) => {
  return <StyledSection className={className}>{children}</StyledSection>;
};
