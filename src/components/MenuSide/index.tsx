import styled from 'styled-components';

const StyledMenuSide = styled.aside<{ isOpen: boolean; className?: string }>`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ${({ isOpen }) => (isOpen ? `display: block;` : `display: none;`)};
  background: rgba(255, 0, 0, 0.3);
  overflow-x: hidden;
  overflow-y: scroll;

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
  return (
    <StyledMenuSide isOpen={isOpen} className={className}>
      <nav>{children}</nav>
    </StyledMenuSide>
  );
};
