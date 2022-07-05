import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import { FiStar, FiClock, FiEdit3, FiX } from 'react-icons/fi';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

import { Header } from '../../components/Header';
import { ReturnToHome } from '../../components/ReturnToHome';
import { Button } from '../../components/Button';
import { MovieGenre } from '../../components/MovieGenre';

import { Container, Main, MovieInfo, ModalContent } from './styles';

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

export const MoviePreview = () => {
  const { user } = useAuth();

  const [data, setData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleEditMovie(id: number) {
    navigate(`/movies/edit/${id}`);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  async function handleDeleteMovieNote() {
    await api.delete(`movies/preview/${params.id}`);

    toast.success('Filme deletado com sucesso');
    setTimeout(() => navigate('/'), 1000);
  }

  useEffect(() => {
    async function fetchMovie() {
      const res = await api.get(`/movies/preview/${params.id}`);

      setData(res.data);
    }

    fetchMovie();
  }, []);

  console.log(data);

  return (
    <Container>
      <Header />

      {data && (
        <Main>
          <div className="options-container">
            <ReturnToHome />

            <div className="movie-edit-options">
              <button onClick={() => handleEditMovie(data.id)}>
                <FiEdit3 size={20} />
              </button>
              <button onClick={handleOpenModal}>
                <FiX size={20} />
              </button>

              <Modal
                isOpen={isModalOpen}
                style={modalStyles}
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
              >
                <ModalContent id="modal-content">
                  <h2>Deseja deletar a nota do filme?</h2>

                  <div>
                    <Button isCancelEvent onClick={handleCloseModal}>
                      Não
                    </Button>
                    <Button
                      onClick={() => {
                        handleCloseModal();
                        handleDeleteMovieNote();
                      }}
                    >
                      Sim
                    </Button>
                  </div>
                </ModalContent>
              </Modal>
            </div>
          </div>

          <MovieInfo>
            <div className="movie-header">
              <h2>{data.title}</h2>

              <div className="stars-rate-container">
                <FiStar size={12} className={data.rating >= 1 ? 'rate' : ''} />
                <FiStar size={12} className={data.rating >= 2 ? 'rate' : ''} />
                <FiStar size={12} className={data.rating >= 3 ? 'rate' : ''} />
                <FiStar size={12} className={data.rating >= 4 ? 'rate' : ''} />
                <FiStar size={12} className={data.rating >= 5 ? 'rate' : ''} />
              </div>
            </div>

            <div className="user-info">
              <div>
                <img src={avatarURL} alt={`Foto de ${user.name}`} />
                <span>Por {user.name}</span>
              </div>

              <div>
                <FiClock size={16} />
                <span>
                  {`${
                    data.updated_at.split(/T|\s/)[0].split('-')[2]
                    // day
                  }/${
                    data.updated_at.split(/T|\s/)[0].split('-')[1]
                    // month
                  }/${
                    data.updated_at.split(/T|\s/)[0].split('-')[1]
                    // year
                  } às ${
                    data.updated_at.split(/T|\s/)[1].split(':')[0] - 3
                    // hour - 3 (time zone)
                  }:${
                    data.updated_at.split(/T|\s/)[1].split(':')[1]
                    // minutes
                  }`}
                </span>
              </div>
            </div>

            {data.tags && (
              <div className="tags-container">
                {data.tags.map((tag: any) => (
                  <MovieGenre key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}

            {data.description && (
              <div>
                {data.description
                  .split(/\n/)
                  .map((paragraph: string, index: number) => (
                    <p key={String(index)}>{paragraph}</p>
                  ))}
              </div>
            )}
          </MovieInfo>
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
