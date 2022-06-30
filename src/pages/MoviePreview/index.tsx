import { useNavigate } from 'react-router-dom';
import { FiStar, FiClock, FiEdit3, FiX } from 'react-icons/fi';
import avatarImg from '../../assets/avatar_placeholder.svg';

import { Header } from '../../components/Header';
import { ReturnToHome } from '../../components/ReturnToHome';
import { MovieGenre } from '../../components/MovieGenre';

import { Container, Main, MovieInfo } from './styles';

export const MoviePreview = () => {
  const navigate = useNavigate();

  function handleEditMovie(id: number) {
    navigate(`/movies/edit/${id}`);
  }

  return (
    <Container>
      <Header />

      <Main>
        <div className="options-container">
          <ReturnToHome />

          <div className="movie-edit-options">
            <button onClick={() => handleEditMovie(1)}>
              <FiEdit3 size={20} />
            </button>
            <button>
              <FiX size={20} />
            </button>
          </div>
        </div>

        <MovieInfo>
          <div className="movie-header">
            <h2>Interestellar</h2>

            <div className="stars-rate-container">
              <FiStar size={20} className="rate" />
              <FiStar size={20} className="rate" />
              <FiStar size={20} className="rate" />
              <FiStar size={20} className="rate" />
              <FiStar size={20} />
            </div>
          </div>

          <div className="user-info">
            <div>
              <img src={avatarImg} alt="Foto de nome do usuário" />
              <span>Por Nome do usuário</span>
            </div>

            <div>
              <FiClock size={16} />
              <span>23/05/22 às 08:00</span>
            </div>
          </div>

          <div className="tags-container">
            <MovieGenre title="Ficção Científica" />
            <MovieGenre title="Drama" />
            <MovieGenre title="Família" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            aspernatur iste omnis ullam ab fugit nesciunt vitae possimus culpa
            itaque ipsam exercitationem debitis magnam quos consectetur,
            eligendi labore eveniet, mollitia dicta facilis dignissimos
            doloribus voluptates! Deserunt tempora velit quaerat beatae fugiat?
            Maxime temporibus illo, incidunt quia, quae debitis consequatur
            voluptas atque placeat aliquid vel pariatur, totam quo. Provident
            nihil facere qui molestiae dolorum ipsa sequi, nam dolores atque sed
            excepturi porro. Quae, architecto maiores numquam ipsum vero
            repudiandae enim aliquam, ab veritatis sit sint impedit soluta
            repellat officia sapiente ipsam voluptates optio dolor itaque dicta
            aspernatur rerum eius facilis? Saepe ducimus corporis laborum ut
            labore nostrum non quod, repellat voluptas tempora facilis harum
            asperiores, perferendis tenetur. Commodi iste, laborum, quod ab
            repudiandae quidem reiciendis ea ratione autem a nisi excepturi,
            fuga corrupti cum libero vero magnam et? Sapiente ab non quibusdam
            atque illo officia voluptatum exercitationem voluptates modi ullam
            impedit ad distinctio consectetur quae placeat harum, esse enim
            porro, consequatur repudiandae ipsum nihil! Obcaecati alias beatae
            et, dolores quam quasi eos incidunt tenetur error, ex reiciendis
            excepturi officiis expedita! Aliquid aliquam nisi, error ipsa ea sit
            aspernatur architecto saepe nemo molestias perferendis ratione,
            eaque nesciunt quam ullam eius animi iste.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            aspernatur iste omnis ullam ab fugit nesciunt vitae possimus culpa
            itaque ipsam exercitationem debitis magnam quos consectetur,
            eligendi labore eveniet, mollitia dicta facilis dignissimos
            doloribus voluptates! Deserunt tempora velit quaerat beatae fugiat?
            Maxime temporibus illo, incidunt quia, quae debitis consequatur
            voluptas atque placeat aliquid vel pariatur, totam quo. Provident
            nihil facere qui molestiae dolorum ipsa sequi, nam dolores atque sed
            excepturi porro. Quae, architecto maiores numquam ipsum vero
            repudiandae enim aliquam, ab veritatis sit sint impedit soluta
            repellat officia sapiente ipsam voluptates optio dolor itaque dicta
            aspernatur rerum eius facilis? Saepe ducimus corporis laborum ut
            labore nostrum non quod, repellat voluptas tempora facilis harum
            asperiores, perferendis tenetur. Commodi iste, laborum, quod ab
            repudiandae quidem reiciendis ea ratione autem a nisi excepturi,
            fuga corrupti cum libero vero magnam et? Sapiente ab non quibusdam
            atque illo officia voluptatum exercitationem voluptates modi ullam
            impedit ad distinctio consectetur quae placeat harum, esse enim
            porro, consequatur repudiandae ipsum nihil! Obcaecati alias beatae
            et, dolores quam quasi eos incidunt tenetur error, ex reiciendis
            excepturi officiis expedita! Aliquid aliquam nisi, error ipsa ea sit
            aspernatur architecto saepe nemo molestias perferendis ratione,
            eaque nesciunt quam ullam eius animi iste.
          </p>
        </MovieInfo>
      </Main>
    </Container>
  );
};
