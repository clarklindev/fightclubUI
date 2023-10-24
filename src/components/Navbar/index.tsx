import styled from 'styled-components';

const StyledNavbar = styled.header`
  background: rgba(0, 0, 255, 1);
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }

  @media (min-width: 1200px) {
    padding: 0 6rem;
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
