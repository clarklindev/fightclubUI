import styled from 'styled-components';

import { useMenu } from '../../context/MenuContext';

const StyledMenuSide = styled.aside<{ isOpen: boolean; className?: string }>`
  ${({ isOpen }) => (isOpen ? `display: block;` : `display: none;`)};
  background: rgba(255, 0, 0, 0.3);

  nav {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    overflow-y: hidden;
  }
`;

type MenuSideProps = {
  children?: React.ReactNode;
};

export const MenuSide = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const { isOpen } = useMenu();

  return (
    <StyledMenuSide isOpen={isOpen} className={className}>
      <nav>{children}</nav>
    </StyledMenuSide>
  );
};
