import React from 'react';
import styled from 'styled-components';

import { Icon } from '@swagfinger/components';

const SelectIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pointer-events-none absolute right-2">
      <Icon size="20px">{children}</Icon>
    </div>
  );
};

type SelectProps = {
  savedData: any;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode[];
};

const Select = (props: SelectProps) => {
  const { savedData, onChange, children } = props;

  return (
    <SelectContainer value={savedData} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)}>
      {children
        ? children.map(each => {
            return each;
          })
        : null}
    </SelectContainer>
  );
};

const SelectWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative flex flex-grow w-full items-center min-w-180">{children}</div>;
};

Select.SelectWrapper = SelectWrapper;
SelectWrapper.displayName = 'Select.SelectWrapper';

Select.SelectIcon = SelectIcon;
SelectIcon.displayName = 'Select.SelectIcon';
export { Select };

// ------------------------------------------------------------------------------------------------------------------------------------------------

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
`;
