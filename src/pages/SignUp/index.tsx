import { Link } from 'react-router-dom';
import {
  FiMail,
  FiLock,
  FiEyeOff,
  FiEye,
  FiArrowLeft,
  FiUser,
} from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export const SignUp = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta </h2>

        <Input icon={<FiUser size={20} />} type="text" placeholder="Nome" />
        <Input icon={<FiMail size={20} />} type="email" placeholder="E-mail" />
        <Input
          icon={<FiLock size={20} />}
          type="password"
          placeholder="Senha"
          showPasswordIcon
          iconPassword={<FiEyeOff size={20} />}
        />

        <Button type="submit">Cadastrar</Button>

        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  );
};
