import { ButtonHTMLAttributes, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';

import { MovieGenre } from '../MovieGenre';

import { Container } from './styles';

type MovieProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: {
    title: string;
    description: string;
    rating: number;
    tags: [
      {
        id: number;
        name: string;
      },
    ];
  };
};

export const Movie = ({ data, ...rest }: MovieProps) => {
  const TEXT_LENGTH = 300;

  return (
    <Container {...rest}>
      <h3>{data.title}</h3>

      <div className="stars-rate-container">
        <FiStar size={12} className={data.rating >= 1 ? 'rate' : ''} />
        <FiStar size={12} className={data.rating >= 2 ? 'rate' : ''} />
        <FiStar size={12} className={data.rating >= 3 ? 'rate' : ''} />
        <FiStar size={12} className={data.rating >= 4 ? 'rate' : ''} />
        <FiStar size={12} className={data.rating >= 5 ? 'rate' : ''} />
      </div>

      <p>{`${data.description.substring(0, TEXT_LENGTH)}...`}</p>

      <div className="tags-container">
        {data.tags.map(tag => (
          <MovieGenre key={String(tag.id)} title={tag.name} />
        ))}
      </div>
    </Container>
  );
};
