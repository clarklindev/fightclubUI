import styled from 'styled-components';

const DimensionsWrapper = styled.div`
  top: 5px;
  left: 5px;
  background: black;
  color: white;
  width: auto;
  height: 30px;
  position: absolute;
  padding: 2px;
`;

type DimensionsProps = {
  value: number | null | undefined;
};

export const Dimensions = (props: DimensionsProps) => {
  const { value } = props;
  return value ? <DimensionsWrapper>{value}</DimensionsWrapper> : null;
};
