import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

import { api } from '../../services/api';

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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted: string) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

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

  async function handleCreateMovie(event: FormEvent) {
    event.preventDefault();

    if (!title) {
      return toast('Informe o título do filme');
    }

    if (!rating) {
      return toast('Dê uma nota para o filme');
    }

    if (newTag) {
      return toast(
        'Você deixou uma tag no campo para adicionar, clique para adicionar a mesma',
      );
    }

    try {
      await api.post('/movies/create', {
        title,
        description,
        rating,
        tags,
      });

      toast.success('Filme criado com sucesso');
      setTimeout(() => navigate('/'), 1000);
      //
    } catch (error: any) {
      if (error.response) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error('Não foi possível criar a nota do filme');
      }
    }
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
              <Input
                type="text"
                placeholder="Título"
                onChange={event => setTitle(event.target.value)}
              />
              <Input
                type="number"
                placeholder="Sua nota (de 0 a 5)"
                onChange={event => setRating(event.target.value)}
              />
            </div>

            <Textarea
              placeholder="Observações"
              onChange={event => setDescription(event.target.value)}
            />

            <Markers>
              <h3>Marcadores</h3>
              <div className="movies-genre-container">
                {tags.map((tag, index) => (
                  <CreateMovieGenre
                    key={String(index)}
                    value={tag}
                    btnClicked={() => handleRemoveTag(tag)}
                  />
                ))}

                <CreateMovieGenre
                  isNew
                  value={newTag}
                  inputChanged={event => setNewTag(event.target.value)}
                  btnClicked={handleAddTag}
                />
              </div>
            </Markers>

            <FormButtons>
              <Button isCancelEvent onClick={handleCancelMovieCreation}>
                Cancelar
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
