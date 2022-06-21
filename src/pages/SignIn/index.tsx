import { FiMail, FiLock, FiEyeOff, FiEye } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input icon={<FiMail size={20} />} placeholder="E-mail" />
        <Input
          icon={<FiLock size={20} />}
          placeholder="Senha"
          showPasswordIcon
          iconPassword={<FiEyeOff size={20} />}
        />

        <Button type="button">Entrar</Button>

        <a href="#">Criar conta</a>
      </Form>
    </Container>
  );
};
