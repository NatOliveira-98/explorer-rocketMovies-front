import { FiPlus } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

import { Container, Main } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header />

      <Main>
        <div className="main-header">
          <h2>Meus filmes</h2>
          <Button>
            <FiPlus size={20} />
            Adicionar filme
          </Button>
        </div>

        <div className="movie-tags-container">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </Main>
    </Container>
  );
};
