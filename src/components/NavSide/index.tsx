import styled from 'styled-components';

import { useMenu } from '@swagfinger/context/MenuContext';
import { CustomNavLink, Heading, HeadingProps } from '@swagfinger/components';

const StyledNavSide = styled.aside<{ isOpen: boolean; className?: string }>`
  ${({ isOpen }) => (isOpen ? `display: block;` : `display: none;`)};
  overflow-wrap: break-word;
  padding: 2rem;
  border-right: none;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 768px) {
    width: 250px;
    display: block;
    position: fixed;
    padding: 3rem;
    height: calc(100dvh - 50px);
    border-right: 1px solid var(--border-color);

    top: 50px;
    overflow: hidden;
    overscroll-behavior: contain;

    &:hover {
      overflow-y: auto;
    }
  }
  @media (min-width: 1024px) {
    width: 300px;
    padding: 3rem;
  }

  @media (min-width: 1200px) {
    width: 400px;
    padding: 4rem;
  }
`;

const StyledNavGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin: -0.25rem 0 -0.25rem -0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    color: var(--clr-foreground);

    &:hover {
      color: var(--clr-foreground);
      background: rgba(255, 255, 255, 0.1);
    }
    &.active {
      color: var(--clr-foreground);
    }
  }
`;

const NavGroup = ({ children, className }: { className?: string; children: React.ReactNode }) => {
  return <StyledNavGroup className={className}>{children}</StyledNavGroup>;
};

const NavHeading = ({ variation, children, ...rest }: HeadingProps) => {
  return (
    <Heading variation={variation} {...rest}>
      {children}
    </Heading>
  );
};

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return <CustomNavLink to={to}>{children}</CustomNavLink>;
};

type NavSideProps = {
  children?: React.ReactNode;
  className?: string;
};
const NavSide = ({ children, className }: NavSideProps) => {
  const { isOpen } = useMenu();

  return (
    <StyledNavSide isOpen={isOpen} className={className}>
      <Nav>{children}</Nav>
    </StyledNavSide>
  );
};

NavSide.Heading = NavHeading;
NavSide.Link = NavLink;
NavSide.Group = NavGroup;

export { NavSide };
