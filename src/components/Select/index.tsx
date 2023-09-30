import React from 'react';
import styled from 'styled-components';

import { Icon } from '../';
import { ChevronDownIcon } from '../../icons';

type SelectProps = {
  savedData: any;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode[];
};

export const Select: React.FC<SelectProps> = ({ savedData, onChange, children }) => {
  return (
    <SelectWrapper>
      <SelectContainer value={savedData} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)}>
        {children
          ? children.map(each => {
              return each;
            })
          : null}
      </SelectContainer>
      <Icon size="20px">
        <ChevronDownIcon />
      </Icon>
    </SelectWrapper>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  align-items: center;
  min-width: 180px;
  .Icon {
    right: ${({ theme }) => theme?.Select?.padding};
    position: absolute;
    pointer-events: none;
  }
`;

const SelectContainer = styled.select`
  -webkit-appearance: none;

  box-sizing: border-box;
  appearance: none;
  margin: 0;
  width: 100%;
  outline: none;
  cursor: pointer;  
  max-height: ${({ theme }) => theme?.Select?.inputHeight};
  height: ${({ theme }) => theme?.Select?.inputHeight};
  color: var(--input-text-color);
  background: var(--input-background-color);
  border: 1px solid var(--border-color);
  border-radius: ${({ theme }) => theme?.Select?.borderRadius};
  padding: ${({ theme }) => theme?.Select?.inputPadding};
  
}`;
