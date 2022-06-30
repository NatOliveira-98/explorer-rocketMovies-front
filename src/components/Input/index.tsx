import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: JSX.Element;
  iconPassword?: JSX.Element;
  showPasswordIcon?: boolean;
  btnClicked?: () => void;
};

export const Input = ({
  icon,
  iconPassword,
  showPasswordIcon = false,
  btnClicked,
  ...rest
}: InputProps) => {
  return (
    <Container>
      {icon}
      <input {...rest} />
      {showPasswordIcon && (
        <button type="button" onClick={btnClicked}>
          {iconPassword}
        </button>
      )}
    </Container>
  );
};
