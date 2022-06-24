import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiEyeOff, FiEye } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input icon={<FiMail size={20} />} type="email" placeholder="E-mail" />
        <Input
          icon={<FiLock size={20} />}
          type="password"
          placeholder="Senha"
          showPasswordIcon
          iconPassword={<FiEyeOff size={20} />}
        />

        <Button type="submit">Entrar</Button>

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
};
