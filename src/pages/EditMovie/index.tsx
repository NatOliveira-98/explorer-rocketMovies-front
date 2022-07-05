import { FormEvent, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

export const EditMovie = () => {
  const [data, setData] = useState<any>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const params = useParams();
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

  function handleCancelMovieEdit(event: FormEvent) {
    event.preventDefault();
    handleOpenModal();
  }

  async function handleEditMovie(event: FormEvent) {
    event.preventDefault();

    if (newTag) {
      return toast(
        'Você deixou uma tag no campo para adicionar, clique para adicionar a mesma',
      );
    }

    try {
      await api.put(`/movies/edit/${params.id}`, {
        title,
        description,
        rating,
        tags,
      });

      toast.success('Filme editado com sucesso');
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

  useEffect(() => {
    async function fetchMovie() {
      const res = await api.get(`/movies/preview/${params.id}`);

      setData(res.data);

      setTitle(res.data.title);
      setDescription(res.data.description);
      setRating(res.data.rating);

      setTags(res.data.tags.map((tags: any) => tags.name));
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <Main>
          <ReturnToHome />

          <Form>
            <div className="flex-container">
              <h2>Editar filme</h2>

              <div className="inputs-container">
                <Input
                  type="text"
                  placeholder="Título"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Sua nota (de 0 a 5)"
                  value={rating}
                  onChange={event => setRating(event.target.value)}
                />
              </div>

              <Textarea
                placeholder="Observações"
                value={description}
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
                <Button isCancelEvent onClick={handleCancelMovieEdit}>
                  Cancelar
                </Button>

                <Modal
                  isOpen={isModalOpen}
                  style={modalStyles}
                  onRequestClose={handleCloseModal}
                  ariaHideApp={false}
                >
                  <ModalContent id="modal-content">
                    <h2>Deseja cancelar a edição do filme?</h2>

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

                <Button onClick={handleEditMovie}>Salvar alterações</Button>
              </FormButtons>
            </div>
          </Form>
        </Main>
      )}

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
    </Container>
  );
};
