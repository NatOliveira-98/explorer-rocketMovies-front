import Container from './styles';

type MovieGenreProps = {
  title: string;
};

export const MovieGenre = ({ title }: MovieGenreProps) => {
  return <Container>{title}</Container>;
};
