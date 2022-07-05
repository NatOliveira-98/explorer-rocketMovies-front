import { ChangeEvent, FormEvent, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  FiCamera,
  FiUser,
  FiMail,
  FiLock,
  FiEyeOff,
  FiEye,
} from 'react-icons/fi';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

import { ReturnToHome } from '../../components/ReturnToHome';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, UserImg } from './styles';

export const Profile = () => {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(`${user.name}`);
  const [email, setEmail] = useState(`${user.email}`);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState<File | undefined>();

  function handleShowPassword() {
    setShowPassword(showPassword ? false : true);
  }

  async function handleUpdateUserProfile(event: FormEvent) {
    event.preventDefault();

    const updated = {
      name,
      email,
      currentPassword,
      newPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeUserAvatar(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files[0];
    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }

  return (
    <Container>
      <div className="background-header">
        <ReturnToHome />
      </div>

      <Form>
        <UserImg>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" onChange={handleChangeUserAvatar} />
          </label>
        </UserImg>

        <div className="user-info">
          <Input
            icon={<FiUser size={20} />}
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Input
            icon={<FiMail size={20} />}
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div>
          <Input
            icon={<FiLock size={20} />}
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha atual"
            showPasswordIcon
            iconPassword={
              showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />
            }
            btnClicked={handleShowPassword}
            onChange={event => setCurrentPassword(event.target.value)}
          />
          <Input
            icon={<FiLock size={20} />}
            type={showPassword ? 'text' : 'password'}
            placeholder="Nova senha"
            showPasswordIcon
            iconPassword={
              showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />
            }
            btnClicked={handleShowPassword}
            onChange={event => setNewPassword(event.target.value)}
          />
        </div>

        <Button
          isBlocked={currentPassword ? false : true}
          onClick={handleUpdateUserProfile}
        >
          Salvar
        </Button>

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
    </Container>
  );
};
