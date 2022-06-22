import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: JSX.Element;
  iconPassword?: JSX.Element;
  showPasswordIcon?: boolean;
};

export const Input = ({
  icon,
  iconPassword,
  showPasswordIcon = false,
  ...rest
}: InputProps) => {
  return (
    <Container>
      {icon}
      <input {...rest} />
      {showPasswordIcon && <button>{iconPassword}</button>}
    </Container>
  );
};
