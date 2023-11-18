import React from 'react';
import styled from 'styled-components';

import { RadioButtonIcon } from '@swagfinger/icons';
import { Icon } from '@swagfinger/components';

type RadioButtonProps = {
  checked: boolean;
  name: string;
  label?: string;
  iconSize: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton = ({ checked, name, label, onChange, iconSize }: RadioButtonProps) => {
  return (
    <RadioButtonContainer className="RadioButton">
      <HiddenRadioButton checked={checked} onChange={onChange} name={name} />
      <StyledRadioButton>
        <Icon size={iconSize}>{checked && <RadioButtonIcon />}</Icon>
      </StyledRadioButton>
      {label}
    </RadioButtonContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------
const RadioButtonContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  gap: 1rem;
`;

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const StyledRadioButton = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50%;
  border: ${({ theme }) => theme?.RadioButton?.border};
  background-color: ${({ theme }) => theme?.RadioButton?.backgroundColor};
`;
