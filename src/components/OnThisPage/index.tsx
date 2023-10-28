import styled from 'styled-components';

const StyledOnThisPage = styled.aside`
  grid-area: onthispage;
  // background: rgba(255, 0, 0, 0.5);
  height: calc(100dvh - 50px);
  display: none;

  @media (min-width: 1200px) {
    display: block;
    position: fixed;
    width: 400px;
    padding: 2rem 4rem;
    border-left: var(--border);
  }
`;

export const OnThisPage = ({ children, className }: { className?: string; children?: React.ReactNode }) => {
  return <StyledOnThisPage className={className}>{children}</StyledOnThisPage>;
};
