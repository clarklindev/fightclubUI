import styled from 'styled-components';

interface NavOnThisPageProps {
  className?: string;
}

const NavOnThisPageContainer = styled.aside<{ className?: string }>`
  border: 1px solid pink;
`;

export const NavOnThisPage = (props: NavOnThisPageProps) => {
  const { className } = props;

  return <NavOnThisPageContainer className={className}>aside</NavOnThisPageContainer>;
};
