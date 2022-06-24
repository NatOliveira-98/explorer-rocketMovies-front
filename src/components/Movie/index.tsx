import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';

import { MovieGenre } from '../MovieGenre';

import { Container } from './styles';

type MovieProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data?: object;
};

export const Movie = ({ data, ...rest }: MovieProps) => {
  return (
    <Container {...rest}>
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
        <MovieGenre title="Ficção Científica" />
        <MovieGenre title="Drama" />
        <MovieGenre title="Família" />
      </div>
    </Container>
  );
};
