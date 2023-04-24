import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CheckIcon from '../../icons/CheckIcon';
import MinusSmallIcon from '../../icons/MinusSmallIcon';
import Icon from '../Icon';

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

const StyledCheckbox = styled.div`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${({ theme }) => theme?.Checkbox?.borderRadius};
  border: ${({ theme }) => theme?.Checkbox?.border};
  background-color: ${({ theme }) => theme?.Checkbox?.backgroundColor};
`;

const Checkbox = ({
  checked,
  name,
  label,
  onChange,
  iconSize = '20px',
  indeterminate = false,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <CheckboxContainer className='Checkbox'>
      <HiddenCheckbox
        checked={checked}
        ref={inputRef}
        onChange={onChange}
        name={name}
      />
      <StyledCheckbox checked={checked}>
        <Icon size={iconSize}>
          {indeterminate ? <MinusSmallIcon /> : checked ? <CheckIcon /> : null}
        </Icon>
      </StyledCheckbox>
      {label}
    </CheckboxContainer>
  );
};

export default Checkbox;
