import styled from 'styled-components';

export const NavOnThePage = styled.aside`
  height: calc(100dvh - 50px);
  grid-area: onthispage;
  display: none;
  background: transparent;
  position: fixed;
  overflow: hidden;
  &:hover {
    overflow-y: auto;
  }
  padding: 2rem;

  @media (min-width: 1200px) {
    right: 4rem;
    display: block;
    border-left: var(--border);
    min-width: 300px;
  }
`;
