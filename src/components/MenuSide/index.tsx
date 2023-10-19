import styled from 'styled-components';

import { Button, Icon } from '../../components';
import { CloseIcon } from '../../icons';
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

    &:hover {
      overflow-y: scroll;
    }

    .close-btn {
      display: none;
    }
  }
`;

type MenuSideProps = {
  children?: React.ReactNode;
};

export const MenuSide = ({
  children,
  className,
  isOpen = false,
}: {
  isOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
}) => {
  const { toggleMenu } = useMenu();

  return (
    <StyledMenuSide isOpen={isOpen} className={className}>
      <nav>{children}</nav>
    </StyledMenuSide>
  );
};
