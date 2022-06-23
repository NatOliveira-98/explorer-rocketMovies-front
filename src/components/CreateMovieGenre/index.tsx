import { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

type CreateMovieGenreProps = InputHTMLAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isNew?: boolean;
  };

export const CreateMovieGenre = ({
  isNew,
  value,
  ...rest
}: CreateMovieGenreProps) => {
  return (
    <Container
      style={{
        backgroundColor: isNew ? 'transparent' : '#262529',
        border: isNew ? '2px dashed #948f99' : '',
      }}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        disabled={!isNew}
        placeholder="Novo marcador"
      />

      <button type="button">{isNew ? <FiPlus /> : <FiX />}</button>
    </Container>
  );
};
