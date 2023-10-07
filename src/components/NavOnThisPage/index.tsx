import styled from 'styled-components';

interface NavOnThisPageProps {
  className?: string;
}

const NavOnThisPageContainer = styled.aside<{ className?: string }>`
  border: 1px solid purple;
`;

export const NavOnThisPage = (props: NavOnThisPageProps) => {
  const { className } = props;

  return <NavOnThisPageContainer className={className}></NavOnThisPageContainer>;
};
