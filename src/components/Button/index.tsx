import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isCancelEvent?: boolean;
  children?: ReactNode;
};

export const Button = ({ isCancelEvent, children, ...rest }: ButtonProps) => {
  return (
    <Container
      style={{
        backgroundColor: isCancelEvent ? '#0d0c0f' : '',
        color: isCancelEvent ? '#ff859b' : '',
      }}
    >
      {children}
    </Container>
  );
};
