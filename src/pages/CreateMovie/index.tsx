import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ReturnToHome } from '../../components/ReturnToHome';
import { CreateMovieGenre } from '../../components/CreateMovieGenre';

import {
  Container,
  Main,
  Form,
  Textarea,
  Markers,
  FormButtons,
  ModalContent,
} from './styles';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',

    marginRight: '-50%',

    transform: 'translate(-50%, -50%)',

    backgroundColor: '#1c1b1e',
    border: 'none',
    borderRadius: '1rem',
  },
};

export const CreateMovie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleCancelMovieCreation(event: FormEvent) {
    event.preventDefault();

    handleOpenModal();
  }

  function handleCreateMovie(event: FormEvent) {
    event.preventDefault();

    toast.success('Filme criado com sucesso');
    setTimeout(() => navigate('/'), 1000);
  }

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
                <CreateMovieGenre value="Ação" />
                <CreateMovieGenre value="Ação" />
                <CreateMovieGenre isNew />
              </div>
            </Markers>

            <FormButtons>
              <Button isCancelEvent onClick={handleCancelMovieCreation}>
                Excluir filme
              </Button>

              <Modal
                isOpen={isModalOpen}
                style={modalStyles}
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
              >
                <ModalContent id="modal-content">
                  <h2>Deseja cancelar a criação do filme?</h2>

                  <div>
                    <Button isCancelEvent onClick={handleCloseModal}>
                      Não
                    </Button>
                    <Button
                      onClick={() => {
                        handleCloseModal();
                        navigate('/');
                      }}
                    >
                      Sim
                    </Button>
                  </div>
                </ModalContent>
              </Modal>

              <Button onClick={handleCreateMovie}>Salvar alterações</Button>

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
            </FormButtons>
          </div>
        </Form>
      </Main>
    </Container>
  );
};
