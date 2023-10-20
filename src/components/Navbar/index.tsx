import styled from 'styled-components';

const StyledNavbar = styled.header`
  background: rgba(255, 255, 255, 0.3);
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    backdrop-filter: blur(5px);
    z-index: -1;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }

  @media (min-width: 1200px) {
    padding: 0 6rem;
  }

  @media (min-width: 2400px) {
    max-width: 2400px;
    margin: 0 auto;
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
