import { FiStar } from 'react-icons/fi';
import { Tag } from '../Tag';

import { Container } from './styles';

export const Movie = () => {
  return (
    <Container>
      <h3>Interestellar</h3>

      <div className="stars-rate-container">
        <FiStar size={12} className="rate" />
        <FiStar size={12} className="rate" />
        <FiStar size={12} className="rate" />
        <FiStar size={12} className="rate" />
        <FiStar size={12} />
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis
        voluptatum placeat totam ducimus ad enim praesentium. Natus odio optio
        itaque! Natus dolorem temporibus sequi ipsa omnis obcaecati adipisci a
        magnam, atque labore maiores tempore quasi in corporis aut, esse dolore
        error provident tempora quidem harum cupiditate. Provident, et itaque!
      </p>

      <div className="tags-container">
        <Tag title="Ficção Científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
      </div>

      <a href="/"></a>
    </Container>
  );
};
