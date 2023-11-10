import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin-bottom: 2rem;

  // children's last child has no margin bottom
  > :last-child {
    margin-bottom: 0;
  }
`;

export const Section = ({ children }: { children: React.ReactNode }) => {
  return <StyledSection>{children}</StyledSection>;
};
