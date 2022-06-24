import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

import { Container, Main } from './styles';

export const Home = () => {
  const navigate = useNavigate();

  function handleShowCreateMovie() {
    navigate('/movie/create');
  }

  function handleShowMoviePreview(id: any) {
    navigate(`/movie/preview/${id}`);
  }

  return (
    <Container>
      <Header />

      <Main>
        <div className="main-header">
          <h2>Meus filmes</h2>
          <Button onClick={() => handleShowCreateMovie()}>
            <FiPlus size={20} />
            Adicionar filme
          </Button>
        </div>

        <div className="movie-tags-container">
          <Movie onClick={() => handleShowMoviePreview(1)} />
        </div>
      </Main>
    </Container>
  );
};
