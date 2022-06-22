import { FiMenu, FiArrowLeft } from 'react-icons/fi';
import avatarImg from '../../assets/avatar_placeholder.svg';

import { Input } from '../Input';
import { Button } from '../Button';

import { Container, Profile, Menu, ProfileMenu } from './styles';

export const Header = () => {
  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>

        <Input type="text" placeholder="Pesquisar pelo título" />

        <button className="menu">
          <FiMenu size={20} />
        </button>

        <Profile>
          <div>
            <span>Nome do usuário</span>
            <button>sair</button>
          </div>

          <button className="user-avatar-desktop">
            <img src={avatarImg} alt={`Foto de usuário`} />
          </button>
        </Profile>
      </div>
    </Container>

    // <Menu>
    //   <div className="header">
    //     <a href="/">
    //       <FiArrowLeft size={20} />
    //       Voltar
    //     </a>
    //   </div>

    //   <ProfileMenu>
    //     <button className="user-avatar">
    //       <img src={avatarImg} alt={`Foto de usuário`} />
    //     </button>

    //     <div>
    //       <h2>Nome do usuário</h2>
    //       <Button>sair</Button>
    //     </div>
    //   </ProfileMenu>

    //   <footer>
    //     <h1>RocketMovies</h1>
    //   </footer>
    // </Menu>
  );
};
