import styled from 'styled-components';

const StyledNavbar = styled.header`
  grid-area: header;
  border: 1px solid red;
  background: blue;
  min-height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 0 2rem;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    width: 100%;
    padding: 0 4rem;
  }

  @media (min-width: 1200px) {
    padding: 0 6rem;
  }

  @media (min-width: 2400px) {
    max-width: 2400px;
  }
`;

const Navbar = ({ children, className }: { className?: string; children?: React.ReactNode }) => {
  return <StyledNavbar className={className}>{children}</StyledNavbar>;
};

const Group = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

Navbar.Group = Group;
export { Navbar };
