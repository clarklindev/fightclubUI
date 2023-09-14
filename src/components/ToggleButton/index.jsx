import React from 'react';
import styled from 'styled-components';

const ToggleButtonContainer = styled.div`
  label {
    display: inline-flex;
    cursor: pointer;
  }
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const ToggleButton = ({ checked, onChange, icon, children }) => {
  return (
    <ToggleButtonContainer className="ToggleButton">
      <label>
        <HiddenInput checked={checked} onChange={onChange} />
        {icon ? icon : children}
      </label>
    </ToggleButtonContainer>
  );
};
