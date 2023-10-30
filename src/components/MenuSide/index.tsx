import styled from 'styled-components';

import { useMenu } from '../../context/MenuContext';

const StyledMenuSide = styled.aside<{ isOpen: boolean; className?: string }>`
  ${({ isOpen }) => (isOpen ? `display: block;` : `display: none;`)};

  padding: 2rem;
  top: 50px;
  overflow-wrap: break-word;
  border-right: none;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  nav a {
    &:hover {
      color: red;
    }
    &.active {
      color: red;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) {
    grid-area: navside;
    width: 250px;
    display: block;
    position: fixed;
    padding: 2rem 2rem 2rem 2rem;
    height: calc(100dvh - 50px);
    border-right: 1px solid var(--border-color);
    top: 50px;
    overflow: hidden;
    &:hover {
      overflow-y: auto;
    }
  }
  @media (min-width: 1024px) {
    width: 300px;
    padding: 2rem 2rem 2rem 4rem;
  }
  @media (min-width: 1200px) {
    width: 400px;
    padding: 2rem 2rem 2rem 6rem;
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
