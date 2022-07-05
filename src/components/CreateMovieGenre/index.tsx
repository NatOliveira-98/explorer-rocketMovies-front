import { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

type CreateMovieGenreProps = InputHTMLAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isNew?: boolean;
    btnClicked?: () => void;
    inputChanged?: (event: any) => void;
  };

export const CreateMovieGenre = ({
  isNew,
  value,
  inputChanged,
  btnClicked,
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
        onChange={inputChanged}
      />

      <button type="button" onClick={btnClicked}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};
