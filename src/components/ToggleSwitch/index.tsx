import React from 'react';
import styled from 'styled-components';

import { useUID } from '@swagfinger/customhooks/useUID';

type ToggleSwitchProps = {
  color: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  savedData: boolean;
};

const ToggleSwitch = React.memo(
  ({ color, onChange, savedData }: ToggleSwitchProps) => {
    const uniqueClassName = useUID('ToggleSwitch');

    return (
      <ToggleSwitchWrapper data-component={ToggleSwitch.displayName}>
        <ToggleSwitchInput type="checkbox" defaultChecked={savedData} onChange={onChange} />
        <Slider className={uniqueClassName} color={color} />
      </ToggleSwitchWrapper>
    );
  },
  // what will cause this component to re-render - excludes onChange function
  (prev, next) => {
    return prev.savedData === next.savedData && prev.color === next.color;
  },
);

// ------------------------------------------------------------------------------------------------------------------------------------------------

const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
`;

const ToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 30px;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 2px;
    top: 2px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
  &.${({ className }) => className} {
    input[type='checkbox']:checked + & {
    background-color: ${({ color }) => color};
  }

  &.${({ className }) => className} {
    input[type='checkbox']:checked + &:before {
    transform: translateX(25px);
  }
`;

ToggleSwitch.displayName = 'ToggleSwitch';
export { ToggleSwitch };
