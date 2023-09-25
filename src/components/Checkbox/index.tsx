import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { CheckIcon, CheckboxIndeterminateIcon } from '../../icons';
import { Icon } from '../';

type CheckboxProps = {
  checked: boolean;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconSize?: string;
  indeterminate?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  name,
  label,
  onChange,
  iconSize = '20px',
  indeterminate = false,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <CheckboxContainer className="Checkbox">
      <HiddenCheckbox checked={checked} ref={inputRef} onChange={onChange} name={name} />
      <StyledCheckbox checked={checked}>
        <Icon size={iconSize}>{indeterminate ? <CheckboxIndeterminateIcon /> : checked ? <CheckIcon /> : null}</Icon>
      </StyledCheckbox>
      {label}
    </CheckboxContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const CheckboxContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  gap: 1rem;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

const StyledCheckbox = styled.div<{ checked: boolean }>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${({ theme }) => theme?.Checkbox?.borderRadius};
  border: ${({ theme }) => theme?.Checkbox?.border};
  background-color: ${({ theme }) => theme?.Checkbox?.backgroundColor};
`;
