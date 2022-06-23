import {
  FiCamera,
  FiUser,
  FiMail,
  FiLock,
  FiEyeOff,
  FiEye,
} from 'react-icons/fi';
import avatarImg from '../../assets/avatar_placeholder.svg';

import { ReturnToHome } from '../../components/ReturnToHome';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, UserImg } from './styles';

export const Profile = () => {
  return (
    <Container>
      <div className="background-header">
        <ReturnToHome />
      </div>

      <Form>
        <UserImg>
          <img src={avatarImg} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" />
          </label>
        </UserImg>

        <div className="user-info">
          <Input
            icon={<FiUser size={20} />}
            type="text"
            defaultValue="Nome do usuário"
          />
          <Input
            icon={<FiMail size={20} />}
            type="email"
            defaultValue="user@email.com"
          />
        </div>

        <div>
          <Input
            icon={<FiLock size={20} />}
            type="password"
            placeholder="Senha atual"
            showPasswordIcon
            iconPassword={<FiEyeOff size={20} />}
          />
          <Input
            icon={<FiLock size={20} />}
            type="password"
            placeholder="Nova senha"
            showPasswordIcon
            iconPassword={<FiEyeOff size={20} />}
          />
        </div>

        <Button isBlocked>Salvar</Button>
      </Form>
    </Container>
  );
};
