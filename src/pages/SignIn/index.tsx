import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FiMail, FiLock, FiEyeOff, FiEye } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export const SignIn = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(showPassword ? false : true);
  }

  function handleUserLogin(event: FormEvent) {
    event.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input
          icon={<FiMail size={20} />}
          type="email"
          placeholder="E-mail"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          icon={<FiLock size={20} />}
          type={showPassword ? 'text' : 'password'}
          placeholder="Senha"
          showPasswordIcon
          iconPassword={
            showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />
          }
          btnClicked={handleShowPassword}
          onChange={event => setPassword(event.target.value)}
        />

        <Button type="submit" onClick={handleUserLogin}>
          Entrar
        </Button>

        <Link to="/register">Criar conta</Link>

        <Toaster
          toastOptions={{
            style: {
              backgroundColor: '#ff859b',
              color: '#1c1b1e',
            },
            iconTheme: {
              primary: '#1c1b1e',
              secondary: '#ff859b',
            },
          }}
        />
      </Form>

      <Background />
    </Container>
  );
};
