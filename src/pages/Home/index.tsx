import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { api } from '../../services/api';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

import { Container, Main } from './styles';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<[]>([]);

  const navigate = useNavigate();

  function handleShowCreateMovie() {
    navigate('/movies/create');
  }

  function handleShowMoviePreview(id: number) {
    navigate(`/movies/preview/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const res = await api.get(`/movies?title=${search}`);

      setMovies(res.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header onSearch={event => setSearch(event.target.value)} />

      <Main>
        <div className="main-header">
          <h2>Meus filmes</h2>
          <Button onClick={() => handleShowCreateMovie()}>
            <FiPlus size={20} />
            Adicionar filme
          </Button>
        </div>

        <div className="movie-tags-container">
          {movies.map((movie: any, index) => (
            <Movie
              key={String(index)}
              data={movie}
              onClick={() => handleShowMoviePreview(Number(movie.id))}
            />
          ))}
        </div>
      </Main>
    </Container>
  );
};
