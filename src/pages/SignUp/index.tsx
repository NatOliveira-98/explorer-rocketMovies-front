import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {
  FiMail,
  FiLock,
  FiEyeOff,
  FiEye,
  FiArrowLeft,
  FiUser,
} from 'react-icons/fi';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(showPassword ? false : true);
  }

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (!name || !email || !password) {
      return toast.error('Preencha todos os campos');
    }

    try {
      await api.post('/users', { name, email, password });
      toast.success('Filme criado com sucesso');
      setTimeout(() => navigate('/'), 1000);
    } catch (error: any) {
      if (error.response) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error('Não foi possível realizar o cadastro');
      }
    }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta </h2>

        <Input
          icon={<FiUser size={20} />}
          type="text"
          placeholder="Nome"
          onChange={event => setName(event.target.value)}
        />
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

        <Button type="submit" onClick={handleSignUp}>
          Cadastrar
        </Button>

        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>

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
