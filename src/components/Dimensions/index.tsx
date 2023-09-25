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

export const Dimensions = props => {
  const { value } = props;
  return value > 0 ? <DimensionsWrapper>{value}</DimensionsWrapper> : null;
};
