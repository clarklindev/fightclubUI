import styled from 'styled-components';

import { useSideMenu } from '../../context/SidemenuContext';

const Navigation = styled.aside<{ isOpen: boolean }>`
  background: rgba(255, 0, 0, 0.3);
  padding: 2rem 2rem 2rem 2rem;
  ${({ isOpen }) => (isOpen ? `display: block;` : `display: none;`)};
  height: calc(100dvh - 50px);
  overflow: hidden;
  overflow-y: scroll;

  nav {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    color: var(--clr-foreground);
  }
  &.active {
    color: var(--clr-foreground);
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 1.2rem;
    }
    nav a {
      padding: 10px 10px 10px 0px;
    }
  }

  @media (min-width: 577px) {
    border-right: var(--border);

    nav a {
      padding: 5px 10px 5px 0px;
      border-radius: 5px;
      color: #7d7d7d;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    overflow-y: hidden;
    padding: 2rem 2rem 2rem 4rem;

    &:hover {
      overflow-y: scroll;
    }

    display: block;

    grid-area: navside;

    .close-btn {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    padding: 2rem 2rem 2rem 6rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 2rem 2rem 8rem;
  }
`;

type NavSideProps = {
  children?: React.ReactNode;
};

export const NavSide = (props: NavSideProps) => {
  const { children } = props;

  const { isOpen } = useSideMenu();

  return (
    <Navigation isOpen={isOpen} className="navside">
      <nav>{children}</nav>
    </Navigation>
  );
};
