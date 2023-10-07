import styled from 'styled-components';

export const NavOnThisPageContainer = styled.aside`
  grid-area: onthispage;
  border: 1px solid purple;
`;

export const NavOnThisPage = () => {
  return <NavOnThisPageContainer></NavOnThisPageContainer>;
};
