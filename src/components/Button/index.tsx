import React from 'react';

import styled from 'styled-components';
import { ThemeType } from '../../themes/DefaultTheme';

type Props = {
  theme?: ThemeType;
};

const BaseButton = styled.button<Props>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  cursor: pointer;

  padding: ${({ theme }) => theme?.Button?.base?.padding};
  border-radius: ${({ theme }) => theme?.Button?.base?.borderRadius};
`;

const ContainedButton = styled(BaseButton)<Props>`
  background: ${({ theme }) => theme?.Button?.contained?.background};
  color: ${({ theme }) => theme?.Button?.contained?.color};
  border: ${({ theme }) => theme?.Button?.contained?.border};
`;

const OutlinedButton = styled(BaseButton)<Props>`
  background: ${({ theme }) => theme?.Button?.outlined?.background};
  color: ${({ theme }) => theme?.Button?.outlined?.color};
  border: ${({ theme }) => theme?.Button?.outlined?.border};
`;

const TextButton = styled(BaseButton)<Props>`
  background: none;
  border: none;
  padding: 0px;
  color: ${({ theme }) => theme?.Button?.text?.color};
`;

const IconButton = styled(BaseButton)<Props>`
  border: none;
  color: none;
  background: none;
  padding: 0px;
`;

type ButtonVariation = 'contained' | 'outlined' | 'text' | 'icon';
type ButtonVariationComponent =
  | typeof ContainedButton
  | typeof OutlinedButton
  | typeof TextButton
  | typeof IconButton;
type LabelType = string | number | React.ReactNode;

interface ButtonProps extends Omit<JSX.IntrinsicElements['button'], 'ref'> {
  variation: ButtonVariation;
  label?: LabelType;
  children?: LabelType;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [key: string]: unknown;
}

const Button: React.FC<ButtonProps> = ({
  variation = 'contained',
  className,
  label,
  children,
  onClick,
  ...rest
}) => {
  const buttonMap: Record<ButtonVariation, ButtonVariationComponent> = {
    contained: ContainedButton,
    outlined: OutlinedButton,
    text: TextButton,
    icon: IconButton,
  };

  const Component = buttonMap[variation];

  return (
    <Component className={className} onClick={onClick} {...rest}>
      {label ? label : children}
    </Component>
  );
};

export default Button;
