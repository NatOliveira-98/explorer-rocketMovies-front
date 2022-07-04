import { useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

import { Input } from '../Input';

import './styles_BurgerMenu.css';
import { Container, Profile } from './styles';

export const Header = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleGoToProfile() {
    navigate('/profile');
  }

  return (
    <Container id="outer-container">
      <div>
        <h1>RocketMovies</h1>

        <Input type="text" placeholder="Pesquisar pelo título" />

        <Menu
          className="hamburger-menu"
          outerContainerId={'outer-container'}
          width={'100vw'}
          right
        >
          <button className="user-avatar" onClick={handleGoToProfile}>
            <img src={avatarURL} alt={`Foto de ${user.name}`} />
          </button>

          <h2 id="user-name">{user.name}</h2>
          <button id="btn-logout-mobile" onClick={signOut}>
            sair
          </button>

          <h1 id="application-name">RocketMovies</h1>
        </Menu>

        {/* <MobileMenu /> */}

        <Profile>
          <div>
            <span>{user.name}</span>
            <button onClick={signOut}>sair</button>
          </div>

          <button className="user-avatar-desktop" onClick={handleGoToProfile}>
            <img src={avatarURL} alt={`Foto de ${user.name}`} />
          </button>
        </Profile>
      </div>
    </Container>
  );
};
