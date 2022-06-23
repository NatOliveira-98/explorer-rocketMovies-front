import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ReturnToHome } from '../../components/ReturnToHome';
import { CreateMovieGenre } from '../../components/CreateMovieGenre';

import { Container, Main, Form, Textarea, Markers } from './styles';

export const CreateMovie = () => {
  return (
    <Container>
      <Header />

      <Main>
        <ReturnToHome />
        <Form>
          <div className="flex-container">
            <h2>Novo filme</h2>

            <div className="inputs-container">
              <Input type="text" placeholder="Título" />
              <Input type="number" placeholder="Sua nota (de 0 a 5)" />
            </div>

            <Textarea placeholder="Observações" />

            <Markers>
              <h3>Marcadores</h3>
              <div className="movies-genre-container">
                <CreateMovieGenre value="Ação" />
                <CreateMovieGenre isNew />
              </div>
            </Markers>
          </div>
        </Form>
      </Main>
    </Container>
  );
};