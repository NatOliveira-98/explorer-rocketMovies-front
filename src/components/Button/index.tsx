import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isCancelEvent?: boolean;
  children?: ReactNode;
  isBlocked?: boolean;
};

export const Button = ({
  isCancelEvent,
  disabled,
  children,
  isBlocked,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      style={{
        backgroundColor: isCancelEvent ? '#0d0c0f' : '',
        color: isCancelEvent ? '#ff859b' : '',
        opacity: isBlocked ? '0.5' : '',
      }}
      disabled={isBlocked}
      {...rest}
    >
      {children}
    </Container>
  );
};
