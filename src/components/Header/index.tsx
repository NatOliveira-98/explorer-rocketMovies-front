import { Link, useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import avatarImg from '../../assets/avatar_placeholder.svg';

import { Input } from '../Input';
import { Button } from '../Button';

import './styles_BurgerMenu.css';
import { Container, Profile } from './styles';

export const Header = () => {
  const navigate = useNavigate();

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
            <img src={avatarImg} alt={`Foto de usuário`} />
          </button>

          <h2 id="user-name">Nome do usuário</h2>
          <button id="btn-logout-mobile">sair</button>

          <h1 id="application-name">RocketMovies</h1>
        </Menu>

        {/* <MobileMenu /> */}

        <Profile>
          <div>
            <span>Nome do usuário</span>
            <button>sair</button>
          </div>

          <button className="user-avatar-desktop" onClick={handleGoToProfile}>
            <img src={avatarImg} alt={`Foto de usuário`} />
          </button>
        </Profile>
      </div>

      {/* <div id="mobile">
        <Menu>
          <div className="header">
            <Link to="/profile">
              <FiArrowLeft size={20} />
              Voltar
            </Link>
          </div>

          <ProfileMenu>
            <button className="user-avatar">
              <img src={avatarImg} alt={`Foto de usuário`} />
            </button>

            <div>
              <h2>Nome do usuário</h2>
              <Button>sair</Button>
            </div>
          </ProfileMenu>

          <footer>
            <h1>RocketMovies</h1>
          </footer>
        </Menu>
      </div> */}
    </Container>
  );
};
