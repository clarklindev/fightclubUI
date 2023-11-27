import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { CheckIcon, CheckboxIndeterminateIcon } from '@swagfinger/icons';

type CheckboxProps = {
  checked: boolean;
  name: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: string;
  indeterminate?: boolean;
};

const Checkbox = ({ checked, name, label, onChange, size = '20px', indeterminate = false }: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <CheckboxContainer className="Checkbox">
      <HiddenCheckbox checked={checked} ref={inputRef} onChange={onChange} name={name} />
      <StyledCheckbox checked={checked} size={size}>
        {indeterminate ? <CheckboxIndeterminateIcon /> : checked ? <CheckIcon /> : undefined}
      </StyledCheckbox>
      <span>{label}</span>
    </CheckboxContainer>
  );
};

Checkbox.displayName = 'Checkbox';
export { Checkbox };

// ------------------------------------------------------------------------------------------------------------------------------------------------

const CheckboxContainer = styled.label`
  width: auto;
  height: auto;
  background: transparent;
  border-radius: ${({ theme }) => theme?.Checkbox?.borderRadius};
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 0px;
  width: 0 px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledCheckbox = styled.div<{ checked: boolean; size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme?.Checkbox?.borderRadius};
  border: ${({ theme, checked }) => (checked ? '1px solid red' : theme?.Checkbox?.border)};
  background-color: ${({ theme, checked }) => (checked ? theme?.Checkbox?.backgroundColor : 'transparent')};
`;
