import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiEyeOff, FiEye } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(showPassword ? false : true);
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input icon={<FiMail size={20} />} type="email" placeholder="E-mail" />
        <Input
          icon={<FiLock size={20} />}
          type={showPassword ? 'text' : 'password'}
          placeholder="Senha"
          showPasswordIcon
          iconPassword={
            showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />
          }
          btnClicked={handleShowPassword}
        />

        <Button type="submit">Entrar</Button>

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
};
